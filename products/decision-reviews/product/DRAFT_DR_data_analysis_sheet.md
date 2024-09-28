# Decision Reviews Statistical Analysis Guide

## Descriptive Statistics

<details closed>
<summary>💡Click to learn more about descriptive statistical analysis.</summary>

1. Questions Descriptive Statistics Can Answer:
    * Central Tendency: Descriptive statistics help in understanding the typical or central value of a dataset. This includes measures like mean, median, and mode.
    * Variability/Dispersion: Descriptive statistics provide insights into the spread or variability of data points. This includes measures like range, variance, standard deviation, and interquartile range.
    * Distribution: Descriptive statistics describe how data are distributed across different values. This includes measures like skewness and kurtosis.
    * Association/Correlation: Descriptive statistics can indicate the relationship between variables. This includes measures like covariance and correlation coefficients.
2. Types of Data Used:
    * Numerical Data: Descriptive statistics are commonly applied to numerical data, which can be discrete (e.g., counts) or continuous (e.g., measurements).
    * Categorical Data: Descriptive statistics can also be applied to categorical data, such as frequencies or proportions of different categories.
    * Ordinal Data: Descriptive statistics can describe ordinal data, where the categories have a meaningful order but the differences between them may not be consistent.
3. Common Analysis and Data Errors:
    * Sampling Bias: Descriptive statistics can be skewed if the sample used is not representative of the population being studied, leading to biased estimates.
    * Measurement Errors: Errors in data collection or recording can distort descriptive statistics. For example, inaccurate measurements or data entry mistakes.
    * Outliers: Extreme values in the dataset can significantly affect measures like the mean and standard deviation, potentially misleading interpretations.
    * Misinterpretation of Measures: Misunderstanding or misinterpretation of descriptive statistics can lead to erroneous conclusions. For instance, assuming causation from correlation or misinterpreting the meaning of measures like skewness or kurtosis.
    * Data Transformation Issues: Transformation of data (e.g., log transformation) can impact the interpretation of descriptive statistics if not applied appropriately or if assumptions underlying the transformation are violated.
    * Overreliance on Summary Statistics: Relying solely on summary statistics without considering the underlying distribution or context of the data can lead to incomplete or misleading insights.

</details>

---

### Covariance and Correlation Coefficients

> _Covariance is ideal for measuring the relationship between two variables maximum. It will not provide insight into the strength of the relationship because it is influenced by the scales of the variables, thus is not ideal for capturing the full complexity of multivariate relationships. The high-level question it answers is: "What is the relationship between two variables?"_

#### Positive Correlation: What variables tend to increase together?
- Add questions here

#### Negative Correlation: What variables tend to have a strong inverse relationship?
- Add questions here

---

### Frequency Distribution

> _Frequency distribution is ideal for measuring the number of times each value in a dataset occurs, and can be used to demonstrate a pattern of frequencies in a variable. Distributions can fall into four categories: grouped, ungrouped, relative, and cumulative. This is often visualized using a frequency table. The high-level question it answers is: "How often is a user event, action, or pattern happening?"_

#### Grouped Frequencies: What are the different values or ranges of values in a dataset? 
- Add questions here

#### Ungrouped Frequencies: What is the frequency of an individual data point or category/segment?
- Add questions here

#### Relative Frequencies: What proportion or percentage of a dataset does a given category/segment represent?
- Add questions here

#### Cumulative Frequencies: What percentile or quartile of a dataset does a given category/segment (or set of categories/segments) represent?
- Add questions here

---

### Central Tendency: What is the center point on distribution for a user event or action?

> _Central tendency is ideal for finding the "middle" or a dataset. It is commonly measured through the mode (most frequent value), median (middle number in an ordered dataset), and mean (sum of all vlaues devided by the total). These are best used in combination to enhance their respective strengths and limitations. The high-level question it answers is: "What is the center point of distribution for a user event or action?"_

#### Mode: Which variable occurs most often? (expressed as a nominal/ordinal/interval/ratio measurement)
- Add questions here

#### Median: What is the middle value of the dataset when all values are arranged in ascending or descending order? (expressed as an ordinal/interval/ratio measurement)
- Add questions here

#### Mean: What is the average value of the dataset? (expressed as an interval or ratio measurement)
- Add questions here

---

### Variability

> _Variability is ideal for balancing central tendency to determine how well you can generalize results from a sample of a population in a dataset. It aids in assessing the reliability of statistical estimates. It tells you how far apart your averages are. The high-level question it answers is: "how much do the individual values for a given event, action of pattern of behavior differ from each other?"_

#### Range: What is the difference between the highest and lowest values in the dataset? (Note: This is an indication of variability, but is sensitive to extreme values.)
- Add questions here

#### Interquartile range: What is the range of the middle 50% of the data? (Note: This is less sensitive to extreme values and provide more robust measure of variability)
- Add questions here 

#### Standard deviation: On average, how spread out are the data points from the middle value of the dataset? (Note: This provides a standardized measure of variability that is easy to interpret. Higher standard deviation indicates greater variability.)
- Add questions here

#### Variance: What is the average square deviation of each data point from the mean of the data set? (Note: This provides a more detailed measure of variability and is useful for calculating other statistical measures. Variances commonly used alongside standard deviation.)
- Add questions here

---
