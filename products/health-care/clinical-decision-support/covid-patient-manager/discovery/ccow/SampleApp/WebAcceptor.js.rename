////////////////////////////////////////////////////////////////////////////////
//
//  Description:    WebAcceptor Sample Application js
//
//  Product Name:   Web SDK
//
//  Version:        6.2.5.12
//
//  Filename:       WebAcceptor.js
//
//  Language:       English (United States)
//
//  Company Name:   Caradigm
//
//  Copyright:      Copyright 2015 Caradigm. All rights reserved.
//
//  Notice:         This sample application that is being made available to the recipient 
//                  is Caradigm's intellectual property and is being provided on an 
//                  "as-is" basis without any representations or warranties, express 
//                  or implied, and recipient's use of or reliance on this code is 
//                  at its own risk.
//
//
////////////////////////////////////////////////////////////////////////////////

/*
<summary>
Initialize the participant context
</summary>

<param>None</param>

<Return>None</Return>
*/
function initialize() {

    try {

        // defaults
        hideProgressBar();
        if (true == checkfailure_LoadVersion())
            return;

        //Caradigm.IAM.Config.RequestTimeout = 12000;
        initializeParticipantCallbacks();
        setLeave();

        var participantCoupon = Caradigm.IAM.IContextor.GetParticipantCoupon();
        if (participantCoupon != "") {
            Caradigm.IAM.IContextor.GetContextAsync(false, function (token, status) {
                //check if already joined
                if (status == Caradigm.IAM.Success) {
                    setJoined();
                } else {
                    setLeave();
                }
            });
        }
    }catch(e){};
}

/*
<summary>
On failure of IContextor.js loading    
</summary>

<param>None</param>

<Return>None</Return>
*/
function checkfailure_LoadVersion() {

    var fail = false;

    // determine if Caradigm loaded correctly
    if(typeof Caradigm == "undefined"){
        alert("User must change default <script> tag to load IContextor from the vault. Please refer to Help section additional information.");
        fail = true;
    }

    // determine if current browser supports Session
    try {
        sessionStorage.setItem("__webacceptor__", "1");
        sessionStorage.removeItem("__webacceptor__");
    }
    catch (e) {
        if ( !window.location.hostname )
            alert("This browser version does not support sessionStorage, or sessionStorage not supported for web page loaded from local file system. Use IE 11 (or later) or Chrome.");
        else
            alert("This browser version does not support sessionStorage. Use IE 11 (or later) or Chrome.");

        fail = true;
    }

    if (fail)
        return fail;

    Caradigm.IAM.IContextor.IsCMEnabled(function (token, status) {
        if (status == Caradigm.IAM.NotInstalled)
            alert("Caradigm product not installed.");

    });

    return fail;
}

var Token = 0;      //token ID of called function

/*
<summary>
Calls Caradigm.IAM.IContextor.JoinAsync() method to join the context. Handles callback success/failure.
</summary>

<param>None</param>

<Return>None</Return>
*/
function join() {
    try{
        startRequest();
        
        var surveyable = true;
        Token = Caradigm.IAM.IContextor.JoinAsync("WebAcceptor#", surveyable,
            //joinAsync callback
            function (token, status) {
                //handle response in callback
                if (status == Caradigm.IAM.Success || status == Caradigm.IAM.CCOWException.AlreadyJoinedException) {
                    showStatusMessage("Joined",status);
                    setJoined();

                } else {
                    showStatusMessage("Could not join context", status); 
                }

                console.log("inside joinAsyncCallback token= " + token + "status= " + status);
                endRequest();
            });

    }catch(e){
        endRequest();
        console.log(e.message);
        showStatusMessage( "Exception", e );
    }

}

/*
<summary>
Calls Caradigm.IAM.IContextor.LeaveAsync() method to leave the context. Handles callback success/failure.
</summary>

<param>None</param>

<Return>None</Return>
*/
function leave() {
    try{
        startRequest();
        Token = Caradigm.IAM.IContextor.LeaveAsync(
        
            //LeaveAsync callback
            function (token, status) {
                if (status == Caradigm.IAM.Success) {
                    showStatusMessage("Left" );

                } else {
                    showStatusMessage("Unknown Participant Exception",status);

                }
                
                //handle response in callback
                console.log("inside LeaveAsyncCallback token= " + token + "status= " + status);
                endRequest();
                setLeave();
            });
    }catch(e){
        endRequest();
        setLeave();
        
        showStatusMessage("Exception", e );
        console.log(e.message);
    }
    
}

/*
<summary>
Calls Caradigm.IAM.IContextor.SuspendAsync() method to suspend from the context. Handles callback success/failure.
</summary>

<param>None</param>

<Return>None</Return>
*/
function suspend() {
    try{
        startRequest();
        Token = Caradigm.IAM.IContextor.SuspendAsync(
            //SuspendAsync callback
            function (token, status) {
                if (status == Caradigm.IAM.Success) {
                    //handle response in callback
                    console.log("inside SuspendAsyncCallBack Token = " + token + " status= " + status);
                    showStatusMessage("Suspended",status);
                    setSuspended(true);

                } else {
                    showStatusMessage("Could not suspend context", status);
                    setSuspended(false);

                    if (status == Caradigm.IAM.CCOWException.UnknownParticipantException) {
                        //reset the buttons since removed from context due to exception
                        showStatusMessage("Unknown Participant Exception", status );
                        setLeave();
                    }
                }
                
                endRequest();    
                
            });
    }catch(e){
        endRequest();

        console.log(e.message);
        showStatusMessage( "Exception", e );
    }

}

/*
<summary>
Calls Caradigm.IAM.IContextor.SuspendAsync() method to suspend from the context. Handles callback success/failure.
</summary>

<param>None</param>

<Return>None</Return>
*/
function resume() {
    try{
        startRequest();
        Token = Caradigm.IAM.IContextor.ResumeAsync(
            //ResumeAsync callback
            function (token, status) {
                if (status == Caradigm.IAM.Success) {
                    //handle response in callback
                    console.log("inside ResumeAsyncCallBack token= " + token + "status= " + status);
                    showStatusMessage("Resumed",status); 
                    setSuspended(false);

                } else {
                    showStatusMessage("Could not resume context",status);
                    setSuspended(false);
                    if (status == Caradigm.IAM.CCOWException.UnknownParticipantException) {
                        //reset the buttons since removed from context due to exception
                        setLeave();
                        showStatusMessage("Unknown Participant Exception",status);
                    }
                }
                
                endRequest();    
            });
    }catch(e){
        endRequest();

        console.log(e.message);
        showStatusMessage( "Exception", e );
    }

}

/*
<summary>
Calls Caradigm.IAM.IContextor.GetContextAsync() method to get context. 
Handles callback success/failure by setting the context information on the UI.
</summary>

<param>None</param>

<Return>None</Return>
*/
function getCommonContext() {
    try{
        startRequest();
        clearContextData();
        Token = Caradigm.IAM.IContextor.GetContextAsync(false,
            //getContextAsync callback
            function (token, status, contextDict) {
                //handle response in callback
                console.log("inside getContextAsync token= " + token + " status= " + status );
                
                if (status == Caradigm.IAM.Success) {
                    setContextData(contextDict);
                    
                    //set context coupon
                    var contextCoupon = Caradigm.IAM.IContextor.GetContextCoupon();
                    if(contextCoupon!==""){
                        document.getElementById("contextCoupon").innerHTML = contextCoupon;
                    }
                    showStatusMessage("Context Received", status);

                } else {
                    showStatusMessage("Could not get context" , status);
                    if (status == Caradigm.IAM.CCOWException.UnknownParticipantException) {
                        //reset the buttons since removed from context due to exception
                        setLeave();
                        showStatusMessage("Unknown Participant Exception" , status);
                    }
                }
                
                endRequest();    
            });
        }catch(e){
            endRequest();

            console.log(e.message);
            showStatusMessage( "Exception", e );
        }
}

/*
<summary>
Calls Caradigm.IAM.IContextor.SetContextAsync() method to set context. 
Handles callback success/failure by getting the context from Vault upon success.
</summary>

<param>None</param>

<Return>None</Return>
*/
function setCommonContext() {
    try{
        var itemsDict = {};
        var patient = document.getElementById("select_patient");
        var patientName = patient.options[patient.selectedIndex].text;
        if (patientName != "") {
            for (var i = 0; i < Patient.patientInfo.length; i++) {
                if (patientName == Patient['patientInfo'][i]['Patient.CO.PatientName']) {
                    itemsDict = Patient['patientInfo'][i];
                    console.log("Patient selected: " +itemsDict["Patient.CO.PatientName"]);
                }
            }
        } else {
            showStatusMessage("Choose Patient.");
            return;
        }   

        clearContextData();
        startRequest();
        var forceChange = false;
        Token = Caradigm.IAM.IContextor.SetContextAsync(itemsDict, forceChange,
            //getContextAsync callback
            function (token, status, noContinue, responseList) {
                //handle response in callback
                console.log("inside setContextAsync token= " + token + " status= " + status + " forceChange = " + forceChange + " noContinue = " + noContinue + " responseList= " + responseList );
                if (status == Caradigm.IAM.Success) {
                    //set context was successful. Get context data
                    getCommonContext();

                } else {
                    //show error
                    showStatusMessage("Could not set context", status);
                    if (status == Caradigm.IAM.CCOWException.UnknownParticipantException) {
                        //reset the buttons since removed from context due to exception
                        setLeave();
                        showStatusMessage("Unknown Participant Exception", status);
                        //show message to the user stating to rejoin into context.
                        alert("participant coupon is not available. Must Join before completing this request.");
                        hideProgressBar();
                        return;
                    }
                    
                    if (noContinue == false  && status == Caradigm.IAM.Cancelled) {
                        //show message to the user stating the reason
                        if (confirm("Cannot set context as some applications are not responding.\n\n" + responseList + "\n\n" + "Do you want to force context change? ")) {
                            showStatusMessage("Forced context change..."); startRequest();
                            Token = Caradigm.IAM.IContextor.SetContextAsync(itemsDict, true,
                                //setContextAsync callback
                                function (token, status, noContinue, responseList) {
                            
                                    //handle response in callback
                                    console.log("inside setContextAsync token= " + token + " status= " + status + " forceChange = " + forceChange + " noContinue = " + noContinue + " responseList= " + responseList);
                                    if (status == Caradigm.IAM.Success) {
                                        //set context was successful. Get context data
                                        getCommonContext();
                                        showStatusMessage("Forced context change successful", status);
                                            
                                    } else if (status == Caradigm.IAM.CCOWException.UnknownParticipantException) {
                                        //reset the buttons since removed from context due to exception
                                        setLeave();
                                        showStatusMessage("Unknown Participant Exception", status);
                                        
                                    } else {
                                        //show error
                                        showStatusMessage("Forced context change cancelled", status);
                                    }
                                    
                                    endRequest();    
                                });
                        }
                    } else if (noContinue == true) {
                    
                        //show message to the user stating the reason for not changing the context
                        alert("Cannot set context as some applications did not accept the context change.\n\n" + responseList );
                        
                        //show error
                        showStatusMessage("Context change cancelled");
                    }
                }
                
                endRequest();    
            });
    }catch(e){
        endRequest();

        console.log(e.message);
        showStatusMessage( "Exception", e );
    }
}

// Replace '+' with space and '|' with new line "\n".
function replace(responseList) {

    return (responseList.toString()).replace(new RegExp("\\+", "g"), ' ').replace(new RegExp("\\|", "g"), "\n");
}
/*
<summary>
Enables/disables button and changes its appearance
</summary>

<param="arr_button">Array of button ids</param>
<param="disabled">Either true/false. When 'true' buttons are disabled. If 'false' button are enabled</param>

<Return>None</Return>
*/
function setAccessibility(arr_button, disabled) {
    for (var item in arr_button) {
        var btn = document.getElementById(arr_button[item]);
        if (btn) {
            btn.disabled = disabled;
            if (disabled == true) {
                btn.className = "disabled";
                
            } else {
                btn.className = "enabled";
                
            }
        }
    }
}

/*
<summary>
Sets UI elements when context session is joined
</summary>

<param>None</param>

<Return>None</Return>
*/
function setJoined() {
    //set button accessibility
    arr_btn_disabled = ["join"];
    arr_btn_enabled = ["leave", "resume", "suspend", "setcontext", "getcontext"];
    
    //toggle the button class and disable enable respectively
    setAccessibility(arr_btn_disabled, true);
    setAccessibility(arr_btn_enabled, false);
    
    //display participant coupon
    var participantCoupon = Caradigm.IAM.IContextor.GetParticipantCoupon();
    var contextCoupon = Caradigm.IAM.IContextor.GetContextCoupon();
    if( participantCoupon!="" ){
        document.getElementById("participantCoupon").innerHTML = participantCoupon;
        if(contextCoupon!==""){
            document.getElementById("contextCoupon").innerHTML = contextCoupon;
            getCommonContext();
            showStatusMessage("Context Received");
        }
        //showStatusMessage("Joined");
    }
    
}

/*
<summary>
Sets UI elements when context session is left
</summary>

<param>None</param>

<Return>None</Return>
*/
function setLeave() {
          
        //set button accessibility
        arr_btn_enabled = ["join"];
        arr_btn_disabled = ["leave", "resume", "suspend", "setcontext", "getcontext"];

        setAccessibility(arr_btn_disabled, true);
        setAccessibility(arr_btn_enabled, false);

        document.getElementById("participantCoupon").innerHTML = "";
        document.getElementById("select_patient").value = "Nil";
        
        clearContextData();
}

/*
<summary>
Sets UI elements when context session is suspend/resume
</summary>

<param>None</param>

<Return>None</Return>
*/
function setSuspended( suspended ) {

    // button set (suspened)
    arr_btn_suspended = ["suspend", "setcontext", "getcontext"];
    arr_btn_resume = ["resume"];

    //toggle the button class and disable enable respectively
    setAccessibility(arr_btn_suspended, suspended );
    setAccessibility(arr_btn_resume, !suspended );

}

/*
<summary>
Sets status message on UI element
</summary>

<param="message">Message string to be shown on the UI element</param>

<Return>None</Return>
*/
function showStatusMessage(message, status) {
    if(status == undefined) {
        document.getElementById("message").innerHTML = message;
    } else{
        document.getElementById("message").innerHTML = message + ": " + status.message + "\t" + " (status code:" + status + ")";
    }
}

/*
<summary>
Sets context data on the UI
</summary>

<param="contextDict">Context data in form of associative array. contextDict["key"]="value"</param>

<Return>None</Return>
*/
function setContextData(contextDict) {
    //clear previous data
    clearContextData();

    var tablediv = document.getElementById("commitedData");
    
    //create table dynamically
    var patientData = document.createElement('TABLE');

    // sort context by key
    var keys = [];
    for (var key in contextDict)
        keys.push( key );

    keys = keys.sort();

    //loop the context Dictionary and set the key/value pairs in the UI
    for (var k = 0; k < keys.length; ++k ) {
        
        var key = keys[ k ];
        var value = contextDict[ key ];
        
        //create the rows for the table
        var tr = document.createElement('TR');
        patientData.appendChild(tr);
        var th = document.createElement('TH');
        var th1 = document.createElement('TH');
        
        th1.style.padding = "5px";
        tr.appendChild(th);
        tr.appendChild(th1);
        
        //add the context data to rows
        th.appendChild(document.createTextNode( key ));
        th1.appendChild(document.createTextNode( value ));
    }
        
    tablediv.appendChild(patientData); 
    
    //set patient name in the combo box
    var patient = document.getElementById("select_patient");
    for (var item = 0; item < patient.options.length; item++) {
        if(patient.options[item].text == contextDict["patient.co.patientname"]){
            patient.selectedIndex = item;
            break;
        }
    }
}

function initializeParticipantCallbacks() {
    Caradigm.IAM.IContextParticipant.OnContextChangePending = function (proposedCoupon) {
        var response = "";
        var checkboxAcceptConditionally = document.getElementById("checkboxAcceptConditionally");
        var checkboxDoNotRespond = document.getElementById("checkboxDoNotRespond");
        if (checkboxAcceptConditionally.checked == true) {
            response = "Work will be lost";
        } else {
            response = "";
        }
        if (checkboxDoNotRespond.checked == true) {
            alert("The application will not respond to survey until OK button hit. Use to mimic non-responding application.")
        }
        return response;
    }

    Caradigm.IAM.IContextParticipant.OnContextChangeAccepted = function (proposedCoupon) {
        getCommonContext();
    }

    Caradigm.IAM.IContextParticipant.OnContextChangeCanceled = function (proposedCoupon) { }
    Caradigm.IAM.IContextParticipant.OnContextTerminated = function (proposedCoupon) { }
}

/*
<summary>
Clears context data
</summary>

<param>None</param>

<Return>None</Return>
*/
function clearContextData() {
   
    //clear table data
    document.getElementById("commitedData").innerHTML = "";

    //clear coupon information
    document.getElementById("contextCoupon").innerHTML = "";
}

var timeOutID = 0;  //ID for interval request
var timeOut = 0;    //time out counter for the request

/*
<summary>
Start interval for activity indicator
</summary>

<param>None</param>

<Return>None</Return>
*/
function startRequest() {

    if (timeOutID == 0) {
        timeOutID = setInterval('progress()', 50);
        displayProgressBar();
    }
}

/*
<summary>
Stop interval timer.
</summary>

<param>None</param>

<Return>None</Return>
*/
function endRequest() {
    //call progress with parameter prg_width to finish the progressbar in order to reset
    // progress(625);
    clearInterval(timeOutID);
    
    //set progressFloat visibilty to none
    hideProgressBar();
    
    timeOutID = 0;  //reset timeout ID
    timeOut = 0;    //reset timeout counter
}

/*
<summary>
Set the progress bar .
</summary>

<param>tempWidth</param>

<Return>None</Return>
*/        
function progress() {
    var progressBar = document.getElementById('progressBar');
    var progressFloat = document.getElementById('progress');
    var left = progressFloat.style.marginLeft.match(/\d+/);
    var width = progressFloat.style.width.match(/\d+/);
    var position = parseInt(left) + parseInt(width);

    //Set the progressFloat to zero once completed
    if (position >= parseInt(progressBar.style.width)) {
        //reduce width
        width = parseInt(width) - 5;
        //increment progressFloat bar position
        progressFloat.style.marginLeft = parseInt(left) + 5 + 'px';
        progressFloat.style.width = parseInt(width) + 'px';
        
        //reset progress bar position if width is zero
        if(width <= 0){
            left = 0;
            progressFloat.style.marginLeft = parseInt(left);
            
        }
    } else {
        //increment width
        if (parseInt(width) < 100) {
            left = -5; //do not move float until its width is 100
            width = parseInt(width) + 5;
        }
        //increment progressFloat bar position
        progressFloat.style.marginLeft = parseInt(left) + 5 + 'px';
        progressFloat.style.width = parseInt(width) + 'px';
    }
    //Request time out 
    if (++timeOut > 1000){
        showStatusMessage("Request timed out! Please check the logs.");
        endRequest();
    }
}

  
/*
<summary>
Set the visibility of the progressbar.
</summary>

<param>None</param>

<Return>None</Return>
*/ 
function displayProgressBar(){
    var progressbar = document.getElementById('progress');
    progressbar.style.display = 'block';   
 }
 
/*
<summary>
Reset the visibility of the progressbar to none.
</summary>

<param>None</param>

<Return>None</Return>
*/ 
function hideProgressBar(){
    var progressFloat = document.getElementById('progress');
    progressFloat.style.marginLeft = 0;
    progressFloat.style.width = 0;
    progressFloat.style.display = 'none';   
}

