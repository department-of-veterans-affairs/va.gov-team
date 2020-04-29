def markdown_to_js(filename,scenarioVariable)
    chatbot_messages = File.read("#{filename}.md").split(/(?:#.*)*\n>/);
    chatbot_messages.shift

    output_file = open("js/#{filename}.js",'w')
    output_file.write("scenario.#{scenarioVariable} = {\n")

    chatbot_messages.each do |message|
        key, content = message.strip().split("\n",2)
        content = content.strip()
        output_file.write("    #{key}: `\n#{content}\n`,\n\n")
    end

    output_file.write("};\n")
    output_file.close
end

markdown_to_js("chatbot-messages","messages")
markdown_to_js("cdc-wrapper-messages","cdc_wrapper_messages")
