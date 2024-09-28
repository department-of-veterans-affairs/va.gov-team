# Categorization

## What is categorization 
Categorization is the processing of summarizing the content of a piece(s) of text into a succinct descriptor. 

## What is the problem and benefit of categorization
* Categorization of free text is a difficult problem because of multiple factors including, but not limited to, 
	* ambiguousness of words
	* free text requests dont always follow proper english structure which makes parsing difficult
	* closely related categories can be tough to differentiate
	* requirement for domain knowledge to build relevant categories
	* language and cultural nuances can be difficult to capture 

* The primary benefit of categorization is being able to understand the distribution of concerns across system users.  In the case of AskVA, the benefits go a step further.  The user is asked to select a Topic and Sub topic from a prepopulated set.  A dynamic categorization could help us refine the form by either refining the set of topics/sub-topics or by eliminating the field entirely if dynamic categorization matches the user selections.  

## How do we solve the problem
### High Level
In order to solve the problem:
1. we simplify the problem set by cleaning the inquiries.  
	* We can get rid of words that wont impact the analysis.  Polite words (please, thanks, etc), stop words (the, and, a, etc), prepositions and conjunctions (of, and, the, etc), punctuation, prefixes/suffixes.
2. we can isolate the entities (names, locations, orgs, etc) to help establish context 
3. we can apply structure to our dataset by identifying parts of speech (nouns, verbs, adjectives, etc)
4. from the structure generated above, we can extract a category

Essentially what we will do is remove text from the inquiry that won't lead us to a category, take the remaining text and apply structure to it, generate a mathematical representation of the structure (called a vector), plot vectors on a graph, group all the vectors that are next to each other, and generate a classification summary for each grouping.

## Without an LLM 
### Libraries to use 
* nltk - python library for text pre-processing 
	* pip install nltk
	* python -m nltk.downloader popular	
* spaCy - python library for entity recognition and parts of speech evaluation 
* gensim - topic extraction 
	*  most common alternatives I've seen are word2vec and fasttext but gensim seemed easier to use
* scikit - classification 

### Code
```
from integration.excel import read_file
from common.read import mock, config
import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import spacy
from gensim import corpa
from gensim import models
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

_config = config()

# Load data
inquiries_dataset = read_file(
    _config["data_folder"], "combined_file _Initial.xlsx"
)
inquiries = inquiries_dataset["full_text_redacted"]

print(inquiries_dataset.head())
print (inquiries)

# Step 1: Data Preprocessing TODO

# Step 2: Text Preprocessing
tokenizer = nltk.tokenize.WordPunctTokenizer()
lemmatizer = nltk.stem.WordNetLemmatizer()

# Tokenize the text data
tokenized_texts = []
for text in inquiries:
    tokens = tokenizer.tokenize(text)
    lemmatized_tokens = [lemmatizer.lemmatize(token) for token in tokens]
    tokenized_texts.append(' '.join(lemmatized_tokens))

print ("Tokenization complete")

# Step 3: Named Entity Recognition (NER)
nlp = spacy.load('en_core_web_sm')
entities = []
for text in tokenized_texts:
    doc = nlp(text)
    entities.extend([(ent.text, ent.label_) for ent in doc.ents])

print("NER Complete")

# Step 4: Part-of-Speech (POS) Tagging
pos_tags = []
for text in tokenized_texts:
    doc = nlp(text)
    pos_tags.extend([(token.text, token.pos_) for token in doc])

print("POS Tagging Complete")

# Step 5: Topic Modeling
dictionary = corpa.Dictionary(tokenized_texts)
bow_corpus = [dictionary.doc2bow(doc) for doc in tokenized_texts]
lda_model = models.LdaModel(bow_corpus, id2word=dictionary, passes=15)

print("Topic Modeling Complete", lda_model.print_topics())

# Step 6: Train Model for Classification
def train_classification_model(tokenized_texts):
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(tokenized_texts)
    y = [entity[1] for entity in entities]  # Use entities as labels for classification

    # Train a Naive Bayes classifier
    clf = MultinomialNB()
    clf.fit(X, y)

    return clf

# Now, classify new inquiries using the trained model
# for each new inquiry
#   classified_inquiry = clf.predict(vectorizer.transform([new_inquiry]))
#   print(f"Classified inquiry: {classified_inquiry}")
```

## With an LLM 
### Libraries to use 
* pytorch
* scikit_learn
* transformers - hugging face transformers library

### Models to Use
* There are a variety of models that can be used for this task.  we used distilbert uncased in previous LLM tasks so to stay consistent and leverage existing approvals, we will use it again.  A more modern model can be used to be more accurate
* As with most LLM code, using a GPU instead of a CPU is far more performant.  Unless an LPU is available, opt for running on a GPU.  A CPU will take significantly longer to run on and will require more memory.  
* The most common issues with running LLM code will be memory exceptions and timeouts.  Process in smaller batches and consolidate topics generated at the end.  


### Code
```
from integration.excel import read_file
from common.read import mock, config
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Load the pre-trained DistilBERT model and tokenizer
model_name = "distilbert-base-uncased"
model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

_config = config()

# Load data
inquiries_dataset = read_file(
    _config["data_folder"], "combined_file _Initial.xlsx"
)
inquiries = inquiries_dataset["full_text_redacted"]

print(inquiries_dataset.head())
print (inquiries)

# Preprocess the text data using the tokenizer
train_inputs = []
for text in inquiries:
    inputs = tokenizer.encode_plus(
        text,
        add_special_tokens=True,
        max_length=512,
        return_attention_mask=True,
        return_tensors="pt",
    )
    train_inputs.append(inputs)
	
test_inputs = []
for text in inquiries:
    inputs = tokenizer.encode_plus(
        text,
        add_special_tokens=True,
        max_length=512,
        return_attention_mask=True,
        return_tensors="pt",
    )
    test_inputs.append(inputs)
	
# Convert the data to PyTorch tensors
train_labels_tensor = torch.tensor(train_labels)
test_labels_tensor = torch.tensor(test_labels)

# Train the model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
criterion = torch.nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-5)

for epoch in range(5):
    optimizer.zero_grad()
    outputs = model(**train_inputs)
    loss = criterion(outputs.logits, train_labels_tensor)
    loss.backward()
    optimizer.step()
    print(f"Epoch {epoch+1}, Loss: {loss.item()}")
	
# Evaluate the model on the test set
model.eval()
with torch.no_grad():
    test_outputs = model(**test_inputs)
test_loss = criterion(test_outputs.logits, test_labels_tensor)
print(f"Test Loss: {test_loss.item()}")


# Now, classify new inquiries using the trained model
# for each new inquiry
#   new_input = tokenizer.encode_plus(
#    new_inquiry,
#    add_special_tokens=True,
#    max_length=512,
#    return_attention_mask=True,
#    return_tensors="pt",
#	)[0]
#   print(f"Classified inquiry: {classified_inquiry}")
#	outputs = model(new_input)
#	predicted_label = torch.argmax(outputs.logits)
#	print(f"Classified inquiry: {predicted_label}")
```
