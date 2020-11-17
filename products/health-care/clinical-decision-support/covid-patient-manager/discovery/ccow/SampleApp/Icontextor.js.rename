///////////////////////////////////////////////////////////////////////////////
//
//  Description:    IContextor Caradigm Contextor Interface
//
//  Product Name:   Web SDK
//
//  Filename:       IContextor.js
//
//  Language:       English (United States)
//
//  Company Name:   Caradigm
//
//  Copyright:      Copyright 2017 Caradigm. All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

(function (window) {
    var Caradigm = {};
    Caradigm.IAM = {};
    Caradigm.IAM.Version = "6.5.0";
    Caradigm.IAM.IContextor = {};

    // global configuration
    Caradigm.IAM.State = {};
    Caradigm.IAM.Config = {
        RequestTimeout: 0               // express in ms, 0 is infinite. 
    };

    function statuscodes() {
        //Success, failure, ...
        Caradigm.IAM.Success = StatusCode(0, "Success", true);
        Caradigm.IAM.Canceled = StatusCode(1, "Canceled", true);
        Caradigm.IAM.Cancelled = Caradigm.IAM.Canceled;

        Caradigm.IAM.Failure = StatusCode(-1, "Failure");
        Caradigm.IAM.DeferReply = StatusCode(0x80000000, "Defer reply");

        Caradigm.IAM.InternalError = StatusCode(-2, "Internal Error");
        Caradigm.IAM.InvalidMessage = StatusCode(-3, "Invalid Message");

        Caradigm.IAM.NotInstalled = StatusCode(-4, "Caradigm context stack not installed");

        //CCOW exceptions to be sent back to the caller by JS Interface
        Caradigm.IAM.CCOWException =
        {
            AlreadyJoinedException: StatusCode(0x80000222, "Already Joined"),

            // A context manager does not represent an active session
            ContextNotActiveException: StatusCode(0x80000227, "Context Not Active"),

            // Attempt to join a context that can't accommodate another participant
            TooManyParticipantsException: StatusCode(0x8000020C, "Too Many Participants"),

            // Attempt to perform a context management method when a transaction is in progress
            TransactionInProgressException: StatusCode(0x80000209, "Transaction In Progress"),

            // Participant coupon does not denote a known participant
            UnknownParticipantException: StatusCode(0x8000020B, "Unknown Participant"),

            // InvalidTransactionException if the context data table contains invalid items
            InvalidTransactionException: StatusCode(0x80000211, "Invalid Transaction"),

            // Attempt to perform a context management method when a transaction is not started
            NotInTransactionException: StatusCode(0x80000207, "Not In Transaction"),

            // This error indicates that an unexpected error occurred.
            GeneralFailureException: StatusCode(0x80004005, "General Failure"),

            // This error indicate that context coupon is invalid.
            InvalidContextCouponException: StatusCode(0x80000203, "Invalid Context Coupon")

        };

        // Error Messages to be sent back to caller when exception occurs.
        Caradigm.IAM.ErrorMessage = {

            JoinName: "join name requires string value. It cannot be null, undefined, array or object.",
            Surveyable: "surveyable requires boolean value. It cannot be null, undefined, array or object.",
            ForceChange: "forceChange requires boolean value. It cannot be null, undefined, array or object.",
            ChangeOnly: "changeOnly requires boolean value. It cannot be null, undefined, array or object.",
            ItemDict: "item dictionary requires array. It cannot be null, undefined.",
            ItemDictKey: "invalid ItemDict key.",
            Callback: "callback must be a function.",
            BooleanError: "requires boolean value. It cannot be null, undefined, array or object.",
            ParticipantCoupon: "participant coupon is not available. Must Join before completing this request.",
            ParticipantUrl: "participant URL is not provided or not a string.",
            ContextCoupon: "context coupon is not available. Must Join before completing this request.",
            InvalidMessage: "message received was invalid or empty",
            InternalError: "Internal error or unexpected exception"
        };

        //Exception to be thrown back to caller
        Caradigm.IAM.Exception = {

            JoinNameInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.JoinName),
            SurveyableInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.Surveyable),
            ForceChangeInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ForceChange),
            ChangeOnlyInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ChangeOnly),
            ItemDictInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ItemDict),
            ItemDictKeyInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ItemDictKey),
            CallbackInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.Callback),
            BooleanInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.BooleanError),

            ParticipantCouponInvalidException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ParticipantCoupon),
            ParticipantUrlInvalidArgumentException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ParticipantUrl),
            ContextCouponInvalidException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.ContextCoupon),
            InvalidMessageException: StatusCode(Caradigm.IAM.Failure, Caradigm.IAM.ErrorMessage.InvalidMessage),
            InternalErrorException: StatusCode(Caradigm.IAM.InternalError, Caradigm.IAM.ErrorMessage.InternalError)

        };

        //HTTPResponse codes.
        Caradigm.IAM.HTTPResponse = {

            Success: 200,
            NotModified: 304,
            BadRequest: 400,
            Forbidden: 403,
            NotAvailable: 404,

            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HTTPVersionNotSupported: 505,

            // ConnectionDenied is a catch all for any error not 502 or 503
            RequestTimeout: 0x80000100,
            ConnectionDenied: 0x80000101,

            LocatorConnectFail: 0x80000110,
            VaultConnectDenied: 0x80000111,
            SocketConnectError: 0x80000112,
            SocketConnectClose: 0x80000113

        };

        //HTTPResponse codes.
        Caradigm.IAM.HTTPStatusCode = {

            Success: StatusCode(Caradigm.IAM.HTTPResponse.Success, "HTTP Success", true),
            BadRequest: StatusCode(Caradigm.IAM.HTTPResponse.BadRequest, "HTTP bad request"),
            Forbidden: StatusCode(Caradigm.IAM.HTTPResponse.Forbidden, "HTTP Forbidden access"),
            NotAvailable: StatusCode(Caradigm.IAM.HTTPResponse.NotAvailable, "Resource not available"),

            InternalServerError: StatusCode(Caradigm.IAM.HTTPResponse.InternalServerError, "Internal server error"),
            NotImplemented: StatusCode(Caradigm.IAM.HTTPResponse.NotImplemented, "Not implemented"),
            BadGateway: StatusCode(Caradigm.IAM.HTTPResponse.BadGateway, "Bad gateway"),
            ServiceUnavailable: StatusCode(Caradigm.IAM.HTTPResponse.ServiceUnavailable, "Service unavailable"),
            GatewayTimeout: StatusCode(Caradigm.IAM.HTTPResponse.GatewayTimeout, "Gateway timeout"),
            HTTPVersionNotSupported: StatusCode(Caradigm.IAM.HTTPResponse.HTTPVersionNotSupported, "HTTP version not supported"),

            RequestTimeout: StatusCode(Caradigm.IAM.HTTPResponse.RequestTimeout, "Request timed out"),
            ConnectionDenied: StatusCode(Caradigm.IAM.HTTPResponse.ConnectionDenied, "Connection denied, server may not exist"),

            LocatorConnectFail: StatusCode(Caradigm.IAM.HTTPResponse.LocatorConnectFail, "Locator connection denied, server may not exist"),
            VaultConnectDenied: StatusCode(Caradigm.IAM.HTTPResponse.VaultConnectDenied, "Vault connection denied, server may not exist"),

            SocketConnectError: StatusCode(Caradigm.IAM.HTTPResponse.SocketConnectError, "Socket connection error, closed"),
            SocketConnectClose: StatusCode(Caradigm.IAM.HTTPResponse.SocketConnectClose, "Socket connection closed")

        };

    }

    ///////////////////////////////////////////////////////////////////////////
    //List of constants.
    //default request timeout. This value should be longer than 10 secs timeout set by the vault
	Caradigm.IAM.Config.RequestTimeout = 12000;
	
	Caradigm.IAM.Constant = {
        DefaultJoinName: "WebContextor",
        CookieExpireDays: 0,
        RequestReady: 4
    };

    ///////////////////////////////////////////////////////////////////////////
    // CMUrl Connection defaults
    Caradigm.IAM.ParticipantConnect = {
        required_protocol: "https://",
        default_url: "10.0.0.1"
    };

    ///////////////////////////////////////////////////////////////////////////
    //RegX patterns for validation
    var Validation_Patterns = {
        AlphabetsOnly: /^[a-zA-Z#]*$/,
        NumberOnly: /^\d{1,10}$/,
        EndWithHash: /^.*#$/
    };

    //log levels
    var LOGLEVEL_NONE = 0;
    var LOGLEVEL_FINE = 1;           // FINE (minimal log)
    var LOGLEVEL_FINER = 2;          // FINER
    var LOGLEVEL_FINEST = 3;         // FINEST (logs everything)

    Caradigm.IAM.LogLevels = {
        None: LOGLEVEL_NONE,
        Fine: LOGLEVEL_FINE,
        Finer: LOGLEVEL_FINER,
        Finest: LOGLEVEL_FINEST
    };

    // Query Logger Level
    var logLevel = LOGLEVEL_FINE;

    /*
    <summary>
    JoinAsync is the asynchronous version of the Join method. Before a client can interact
    with SSO and Context Manager, client has to join first.
    </summary>

    <param name="joinName"> The application name. It cannot be empty</param>

    <param name="surveyable">If true, before other applications commit a context change,
    this application will be surveyed.</param>

    <param name="joinCallback">This is a callback method object. Web-app needs to implement
    code in this method at their end to capture the status and token (explained below)
    that is passed to this callback function. This callback function will be invoked
    from the JS SDK as a response after successful or failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    </return>
    */

    Caradigm.IAM.IContextor.JoinAsync = function (joinName, surveyable, joinCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.JoinAsync");

            //Validate input parameters.
            if (isNullOrUndefined(joinName) || typeof (joinName) != 'string') {
                throw Caradigm.IAM.Exception.JoinNameInvalidArgumentException;
            }
            var isName = Validation_Patterns.AlphabetsOnly.test(joinName);
            if (false == isName) {
                throw Caradigm.IAM.Exception.JoinNameInvalidArgumentException;
            }
            if (isNullOrUndefined(surveyable)) {
                throw Caradigm.IAM.Exception.SurveyableInvalidArgumentException;
            }
            if (!(typeof surveyable === 'string' || typeof surveyable === 'boolean' || typeof surveyable === 'number')) {
                throw Caradigm.IAM.Exception.SurveyableInvalidArgumentException;
            }
            if (isNullOrUndefined(joinName) || typeof (joinCallback) != 'function') {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }
            surveyable = convertToBoolean(Caradigm.IAM.Exception.SurveyableInvalidArgumentException, surveyable);

            //create token for this method call
            var token = getNextToken();

            //appending random number to joinName (application Name) if it ends with '#'.
            if (Validation_Patterns.EndWithHash.test(joinName)) {
                joinName = joinName + getRandomNumber();
            }
            //Call CCOW method to join the context
            CCOW.JoinCommonContext(joinName, surveyable, DeferCallback(
            //inline function to call the callback with token value
            //joinCallback() is passed by the caller
                function (status) {
                    //call the callback
                    try {
                        trace.entering("Caradigm.IAM.IContextor.JoinAsync Callback");
                        trace.log("status:", status);
                        if (status == Caradigm.IAM.Success)
                            SetSessionData("Caradigm_IAM_JoinName", joinName);

                        joinCallback(token, status);

                    } catch (e) {
                        trace.error("Application code exception in joinCallback ", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    Application calls this method to get the current context i.e. which subject (user, patient) is in the context at that very moment.
    </summary>
    <param name="changeOnly">The input changeOnly is a boolean value. If true, only the changed context items will be retrieved.
    Otherwise, all the context items will be returned.</param>

    <param name="getContextCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token ,status and context dictionary (explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="contextDict">contextDict is an array (Associated array) which has key- value pair. This array has context item information present in it.
    The web-app can use this information to get subject related data.</param>
    </return>
    */

    Caradigm.IAM.IContextor.GetContextAsync = function (changeOnly, getContextCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.GetContextAsync");

            if (isNullOrUndefined(changeOnly)) {
                throw Caradigm.IAM.Exception.ChangeOnlyInvalidArgumentException;
            }
            if (!(typeof changeOnly === 'boolean' || typeof changeOnly === 'string' || typeof changeOnly === 'number')) {
                throw Caradigm.IAM.Exception.ChangeOnlyInvalidArgumentException;
            }
            if (isNullOrUndefined(getContextCallback) || typeof (getContextCallback) != 'function') {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }
            changeOnly = convertToBoolean(Caradigm.IAM.Exception.ChangeOnlyInvalidArgumentException, changeOnly);

            //create token for this method call
            var token = getNextToken();

            //Call CCOW method to get common the context
            CCOW.GetCommonContext(changeOnly, DeferCallback(
            //inline function to call the callback with token value
            //getContextCallback() is passed by the caller
                function (status, contextDict) {
                    //call the callback
                    try {
                        trace.entering("Caradigm.IAM.IContextor.GetContextAsync callback");
                        getContextCallback(token, status, contextDict);
                    } catch (e) {
                        trace.error("Application code exception in getContextCallback", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    This method allows an application to set the context for a subject that the application selected.
    An application may only set the context data when it is joined to the context. In general,
    only the application that instigated the context change should set the context data.
    It sets context items from the array ("items" argument) to context manager.
    </summary>

    <param name="itemsDict">This is an array (Associated array ) which has key/value pair that contains
    the information needed to set a new context i.e. data related to subject.</param>

    <param name="forceChange">The input forceChange is a boolean. If forceChange= false and the other applications
    respond with conditional accept during the context change, this context change will be canceled.
    Otherwise, the change will be committed. However, if any application does not respond to survey within a timeframe,
    context change will be canceled regardless of this parameter.
    If all applications have accepted the proposed context change without a condition, the context change will be committed.
    </param>

    <param name="setContextCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token, status and context item dictionary(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="noContinue">Boolean that indicate if the context change can be carried out or not.
    If true, the context change cannot be committed. This is the case if any other application does not respond to survey.
    If this is the case, there is no point for this application to force the context change by setting forceChange is true.
    If false, context change can be committed.</param>

    <param name="responseList">responseList is a list of responses from participating applications.
    Each response is a user displayable reason why the application cannot accept a context change at this time.
    Some applications may choose to not provide a reason. The web-app should present this list of reasons to the end-user to let user decide what action to take.
    If this list is empty, the context change has been committed. If it is not, the context change has been canceled.</param>
    </return>
    */

    Caradigm.IAM.IContextor.SetContextAsync = function (itemsDict, forceChange, setContextCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.SetContextAsync");

            if (isNullOrUndefined(itemsDict)) {
                throw Caradigm.IAM.Exception.ItemDictInvalidArgumentException;
            }
            if (!checkItemDict(itemsDict)) {
                throw Caradigm.IAM.Exception.ItemDictKeyInvalidArgumentException;
            }
            if (isNullOrUndefined(forceChange)) {
                throw Caradigm.IAM.Exception.ForceChangeInvalidArgumentException;
            }
            if (!(typeof forceChange === 'boolean' || typeof forceChange === 'string' || typeof forceChange === 'number')) {
                throw Caradigm.IAM.Exception.ForceChangeInvalidArgumentException;
            }
            if (isNullOrUndefined(setContextCallback) || (typeof (setContextCallback) != 'function')) {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }
            forceChange = convertToBoolean(Caradigm.IAM.Exception.ItemDictKeyInvalidArgumentException, forceChange);

            //create token for this method call
            var token = getNextToken();

            //Call CCOW method to set common the context
            CCOW.SetCommonContext(itemsDict, forceChange, DeferCallback(
            //inline function to call the callback with token value
            //setContextCallback() is passed by the caller
                function (status, noContinue, responseList) {
                    //call the callback
                    trace.entering("CCOW.SetCommonContext callback");
                    try {
                        trace.log("status:", status, "noContinue:", noContinue, "responseList:", responseList);
                        setContextCallback(token, status, noContinue, responseList);
                    } catch (e) {
                        trace.error("Application code exception in setContextCallback ", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    SuspendAsync is the asynchronous version of the Suspend method.
    </summary>

    <param name="suspendCallback">This is a callback method object. Web-app needs to implement
    code in this method at their end to capture the status and token (explained below)
    that is passed to this callback function. This callback function will be invoked
    from the JS SDK as a response after successful or failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    </return>
    */

    Caradigm.IAM.IContextor.SuspendAsync = function (suspendCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.SuspendAsync");
            if (isNullOrUndefined(suspendCallback) || typeof (suspendCallback) != 'function') {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }

            //create token
            var token = getNextToken();

            //call COOW method to Suspend the context
            CCOW.SuspendCommonContext(DeferCallback(
            //inline function to call the callback with token value
            //suspendCallback() is passed by the caller
                function (status) {
                    try {
                        //call the callback
                        trace.entering("Caradigm.IAM.IContextor.SuspendAsync callback");
                        trace.log("status:", status);
                        suspendCallback(token, status);
                    } catch (e) {
                        trace.error("Application code exception in suspendCallback ", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    ResumeAsync is the asynchronous version of the Resume method.
    </summary>

    <param name="resumeCallback">This is a callback method object. Web-app needs to implement
    code in this method at their end to capture the status and token (explained below)
    that is passed to this callback function. This callback function will be invoked
    from the JS SDK as a response after successful or failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    </return>
    */

    Caradigm.IAM.IContextor.ResumeAsync = function (resumeCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.ResumeAsync");
            if (isNullOrUndefined(resumeCallback) || typeof (resumeCallback) != 'function') {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }

            //create token for this method call
            var token = getNextToken();

            //Call CCOW method to resume the context
            CCOW.ResumeCommonContext(DeferCallback(
            //inline function to call the callback with token value
            //resumeCallback() is passed by the caller
                function (status) {
                    try {
                        //call the callback
                        trace.entering("Caradigm.IAM.IContextor.ResumeAsync callback");
                        trace.log("status:", status);
                        resumeCallback(token, status);
                    } catch (e) {
                        trace.error("Application code exception in resumeCallback ", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    The application should call this if it does not want to participate in context any more.
    </summary>
    <param name="leaveCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token and status(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>
    </return>
    */

    Caradigm.IAM.IContextor.LeaveAsync = function (leaveCallback) {
        try {
            var trace = Trace("Caradigm.IAM.IContextor.LeaveAsync");
            if (isNullOrUndefined(leaveCallback) || typeof (leaveCallback) != 'function') {
                throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
            }

            //create token
            var token = getNextToken();

            //call COOW method to leave the context
            CCOW.LeaveCommonContext(DeferCallback(
            //inline function to call the callback with token value
            //leaveCallback() is passed by the caller
                function (status) {
                    try {
                        trace.entering("Caradigm.IAM.IContextor.LeaveAsync callback");
                        trace.log("status:", status);
                        leaveCallback(token, status);
                    } catch (e) {
                        trace.error("Application code exception in leaveCallback ", e.message);
                    }
                    trace.leaving();
                }));

            trace.leaving();
        } catch (e) {
            trace.exception(e);
            throw e;
        }
        return token;
    }

    /*
    <summary>
    LogoutAsync performs a logout operation by clearing the user contex key.
    </summary>

    <param name="userSubject"> A valid CCOW user context key, like USER.ID.LOGIN.WINDOWS </param>

    <param name="forceChange">forces changes </param>

    <param name="logoutCallback">logout callback</param>

    Callback Details
    <return>
    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="noContinue">Boolean that indicate if the context change can be carried out or not.
    This value should always be returned as false unless an error occurs.</param>

    <param name="responseList">responseList is a list of responses from participating applications.
    Each response is a user displayable reason why the application cannot accept a context change at this time.
    Some applications may choose to not provide a reason. The web-app should present this list of reasons to the end-user to let user decide what action to take.
    If this list is empty, the context change has been committed. If it is not, the context change has been canceled.</param>
    </return>
    */

    Caradigm.IAM.IContextor.LogoutAsync = function (userSubject, forceChange, logoutCallback) {

        var trace = Trace("Caradigm.IAM.IContextor.LogoutAsync");
        trace.log("arguments passed:", arguments.length, "key:", userSubject);
        if (2 == arguments.length) {
            logoutCallback = arguments[1];
            forceChange = arguments[0];
            userSubject = "user.id.login.windows";
        }

        if (isNullOrUndefined(logoutCallback) || typeof (logoutCallback) != 'function') {
            throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
        }

        // contextDict
        var contextDict = {};
        contextDict[userSubject] = "";

        // set context
        trace.log("setting subject to blank:", userSubject);
        Caradigm.IAM.IContextor.SetContextAsync(contextDict, forceChange, logoutCallback);
    }

    /*
    <summary>
    GetParticipantCoupon immediately returns the context participant coupon, if any.
    </summary>

    <return>
    Participant coupon
    </return>
    */

    Caradigm.IAM.IContextor.GetParticipantCoupon = function () {

        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        return participantCoupon;
    }

    /*
    <summary>
    GetContextCoupon immediately returns the context context coupon, if any.
    </summary>

    <return>
    Context coupon
    </return>
    */

    Caradigm.IAM.IContextor.GetContextCoupon = function () {

        var contextCoupon = GetSessionData("Caradigm_IAM_ContextCoupon");
        return contextCoupon;
    }

    /*
    <summary>
    GetJoinName immediately returns the join name. The join name was provided in 
    JoinAsync.
    </summary>

    <return>
    join name
    </return>
    */

    Caradigm.IAM.IContextor.GetJoinName = function () {

        return GetSessionData("Caradigm_IAM_JoinName");
    }

    /*
    <summary>
    GetContextManager retrieves CMUrl from a given participantUrl
    </summary>

    <param name="participantUrl">
    participantUrl
    </param>

    <param name="getcmCallback">getcm callback</param>

    <return>
    Callback Details

    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="ContextUrl">ContextUrl</param>

    </return>
    */

    Caradigm.IAM.IContextor.GetContextManager = function (participantUrl, getcmCallback) {

        var trace = Trace("Caradigm.IAM.IContextor.GetContextManager");

        //Validate input parameters.
        if (isNullOrUndefined(participantUrl) || typeof (participantUrl) != 'string') {
            throw Caradigm.IAM.Exception.ParticipantUrlInvalidArgumentException;
        }
        if (isNullOrUndefined(getcmCallback) || (typeof (getcmCallback) != 'function')) {
            throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
        }

        //create token for this method call
        var token = getNextToken();
        CCOW.LocateContextManager("", participantUrl, null, false,
        //callback to handle CCOW.LocateContextManager response
            function (request) {
                var cachelocal = false;
                LocateContextManagerHandler(request, cachelocal, DeferCallback(function (status, CMUrl) {
                    try {
                        trace.entering("calling application callback function", status)
                        getcmCallback(token, status, CMUrl);
                        trace.leaving();
                    }
                    catch (e) {
                        trace.error("Application code exception in GetCMUrl", e.message);
                    }
                }));
            });

        trace.leaving();
        return token;
    }

    /*
    <summary>
    GetCMUrl retrieves CMUrl
    </summary>

    <param name="nonce">
    To generate a signature, pass a non-null nonce as an integer or string.
    </param>

    <param name="cacheable">
    True if use or generate a cacheable CMUrl. If no CMUrl has been cached, calling 
    GetCMUrl will create and cache a CMUrl. Subsequent calls with cacheable set will
    return the cached Url.    
    </param>

    <param name="getcmurlCallback">getcmurl callback</param>

    <return>
    Callback Details

    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="CMUrl">CMUrl</param>

    <param name="CMUrlSig">CMUrlSig</param>
    </return>
    */

    Caradigm.IAM.IContextor.GetCMUrl = function (nonce, cacheable, getCMUrlCallback) {

        if (arguments.length <= 1)
            return Caradigm.IAM.IContextor.GetCMUrl(null, false, arguments[0]);

        var trace = Trace("Caradigm.IAM.IContextor.GetCMUrl");
        if (isNullOrUndefined(getCMUrlCallback) || (typeof (getCMUrlCallback) != 'function')) {
            throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
        }

        //create token for this method call
        var token = getNextToken();
        CCOW.GetCMUrl(nonce, cacheable, true, function (status, CMUrl, CMUrlSig) {
            try {
                trace.entering("calling application callback function", status)
                if (getCMUrlCallback)
                    getCMUrlCallback(token, status, CMUrl, CMUrlSig);

                trace.leaving();
            }
            catch (e) {
                trace.error("Application code exception in GetCMUrl", e.message);
            }
        });

        trace.leaving();
        return token;
    }

    /*
    <summary>
    IsCMEnabled
    </summary>

    <param name="IsCMEnabledCallback">is enabled callback</param>

    <return>
    Callback Details

    <param name="token">Unique integer assigned to this request.</param>

    <param name="status">If the Caradigm stack is enabled on the desktop, returns Caradigm.IAM.Success;
    otherwise the status will be Caradigm.IAM.NotInstalled
    </param>

    </return>
    */

    Caradigm.IAM.IContextor.IsCMEnabled = function (IsCMEnabledCallback) {

        var trace = Trace("Caradigm.IAM.IContextor.IsCMEnabled");
        if (isNullOrUndefined(IsCMEnabledCallback) || (typeof (IsCMEnabledCallback) != 'function')) {
            throw Caradigm.IAM.Exception.CallbackInvalidArgumentException;
        }

        //create token for this method call
        var token = getNextToken();

        var queryLoggerUrl = LocatorUrl() + "?interface=Admin" +
                                      "&method=LogMessage" +
                                      "&logger=.IContextor";

        // determine if port is listening
        HttpRequestTimeout("GET", queryLoggerUrl, Caradigm.IAM.Config.RequestTimeout,
            DeferCallback(function (request) {
                if (!IsCMEnabledCallback)
                    return;

                //default is invalid status
                var status = (request.status == Caradigm.IAM.HTTPResponse.Success)
                            ? Caradigm.IAM.Success
                            : Caradigm.IAM.NotInstalled;

                Caradigm.IAM.State.CMEnabled = (Caradigm.IAM.Success == status);
                IsCMEnabledCallback(token, status);

            }));

        trace.leaving();
        return token;
    }

    ///////////////////////////////////////////////////////////////////////////
    //CCOW Namespace
    var CCOW = {};

    /*
    <summary>
    This method is the asynchronous method use to join the context.
    </summary>
    
    <param name="joinName"> The application name. It cannot be empty</param>
    
    <param name="surveyable">If true, before other applications commit a context change, 
    this application will be surveyed. </param>
    
    <param name="joinCallback">This is a callback method object. Web-app needs to implement 
    code in this method at their end to capture the status and token (explained below) 
    that is passed to this callback function. This callback function will be invoked
    from the JS SDK as a response after successful or failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    </return>
    */

    CCOW.JoinCommonContext = function (joinName, surveyable, joinCallback) {
        var trace = Trace("CCOW.JoinCommonContext");

        function joinError(status) {
            // cleanup session data
            DeleteSessionData();

            // report error
            joinCallback(status);
            return trace.leaving();
        }

        // step 1. connect get locator CMUrl
        CCOW.GetCMUrl(null, false, false, function (status, CMUrl) {
            if (!(Caradigm.IAM.Success == status || Caradigm.IAM.HTTPResponse.Success == status)) {
                trace.error("Failure to connect to Locator", status);
                return joinError(Caradigm.IAM.HTTPStatusCode.LocatorConnectFail);
            }

            // step 2. create Survey socket
            var guid = GetSessionData("Caradigm_IAM_guid");
            var persistPort = GetSessionData("Caradigm_IAM_persistPort");

            SurveySocket(persistPort, guid, function (status) {
                if (Caradigm.IAM.Success != status) {
                    trace.error("Failure to connect to survey socket ", status);
                    return joinError(status);
                }

                // step 3. join common context
                var participantUrl = GetSessionData("Caradigm_IAM_participantUrl");
                var contextParticipantUrl = dynamicUrl(
                            "",
                            Caradigm.IAM.ParticipantConnect.default_url,
                            guid);

                var requestURL = CCOW.CreateRequestURL("ContextManager", "JoinCommonContext") +
                            "&applicationName=" + joinName +
                            "&contextParticipant=" + contextParticipantUrl +
                            "&survey=" + surveyable +
                            "&wait=1";

                //send HTTP request to join context
                trace.log(requestURL);
                HttpRequest("POST", requestURL,
                    //callback to handle joinCommonContext response
                    function (request) {
                        try {
                            trace.entering("joinCommonContext Callback");

                            //default is invalid status
                            var status = request.status;
                            if (Caradigm.IAM.HTTPResponse.ConnectionDenied == status)
                                return joinError(Caradigm.IAM.HTTPStatusCode.VaultConnectDenied);

                            //check if HTTP request was successful
                            if (Caradigm.IAM.HTTPResponse.Success == status) {
                                trace.log("joinCommonContext response is", request.responseText);

                                //response
                                status = Caradigm.IAM.Success;
                                var response = ParseResponse(request.responseText);
                                var participantCoupon = response.participantCoupon;

                                //analyze the response text to check if Context Participant Coupon value is received
                                if (participantCoupon) {
                                    if (true == CCOW.ValidateCoupon(participantCoupon)) {

                                        //set ParticipantCoupon in cookie
                                        SetSessionData("Caradigm_IAM_ParticipantCoupon", participantCoupon);
                                        trace.log("Valid Participant Coupon ", participantCoupon);

                                        //set status as success
                                        status = Caradigm.IAM.Success;
                                        trace.log("joinCallback Status =", status);

                                        joinCallback(status);
                                        return trace.leaving();

                                    } else {
                                        trace.error("Invalid Participant coupon.");
                                        status = StatusCode(Caradigm.IAM.CCOWException.InvalidContextCouponException, response.participantCoupon);
                                        return joinError(status);
                                    }
                                } else if ('exception' in response) {
                                    trace.log("CCOW Exception in JoinCommonContext HTTP response");
                                    status = getStatusCodeAndDeleteCookie(response.exception);
                                    return joinError(status);
                                } else {
                                    trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                    status = Caradigm.IAM.Exception.InvalidMessageException;
                                    return joinError(status);
                                }
                            } else {
                                trace.error("Inside joinCommonContext HTTP(s) request failure ", request.status);
                                status = getHTTPStatusCode(request.status);
                                return joinError(status);
                            }

                        } catch (e) {
                            // an exception here is likely a serious error in our code
                            trace.exception(e);
                            status = StatusCodeFromException(e);
                            return joinError(status);
                        }
                    });
            });
        });
    }

    /*
    <summary>
    The application should call this if it does not want to participate in context any more. This is a CCOW implementation.
    </summary>
    <param name="leaveCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token and status(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>
    </return>
    */

    CCOW.LeaveCommonContext = function (leaveCallback) {

        var trace = Trace("CCOW.LeaveCommonContext");

        //check participant coupon
        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        if (isNullOrUndefined(participantCoupon)) {
            throw Caradigm.IAM.Exception.ParticipantCouponInvalidException;
        }

        //create HTTP request
        var requestURL = CCOW.CreateRequestURL("ContextManager", "LeaveCommonContext")
                                        + "&participantCoupon=" + participantCoupon;
        trace.log("RequestURL = ", requestURL);

        // close socket on leave
        SurveySocket.close();

        //send HTTP request to Leave context
        HttpRequest("POST", requestURL,
        //callback to handle leaveCommonContext response
            function (request) {
                try {
                    trace.entering("leaveCommonContext Callback");

                    //default is invalid status
                    var status = Caradigm.IAM.Failure;

                    //check if HTTP request was successful
                    if (request.status == Caradigm.IAM.HTTPResponse.Success) {
                        trace.log("Inside LeaveCommonContext HTTP request success");
                        trace.log("leaveCommonContext response is ", request.responseText);

                        //response
                        var respLeaveCommonContext = ParseResponse(request.responseText);

                        //analyze the response text to know if context leave request successful
                        if ((request.responseText == "")) {
                            trace.log("Leave request is successful");

                            DeleteSessionData();

                            //leave success
                            status = Caradigm.IAM.Success;
                            trace.log("leaveCallback Status =", status);
                            leaveCallback(status);

                        } else if ('exception' in respLeaveCommonContext) {
                            trace.log("CCOW Exception in LeaveCommonContext HTTP response");
                            status = getStatusCodeAndDeleteCookie(respLeaveCommonContext.exception);
                            leaveCallback(status);

                        } else {
                            trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                            status = Caradigm.IAM.Exception.InvalidMessageException;
                            leaveCallback(status);

                        }
                    } else {
                        trace.error("Inside leaveCommonContext HTTP(s) request failure", request.status);
                        status = getHTTPStatusCode(request.status);
                        leaveCallback(status);
                    }
                    trace.leaving();
                } catch (e) {
                    // an exception here is likely a serious error in our code
                    trace.exception(e);

                    status = StatusCodeFromException(e);
                    leaveCallback(status);
                }
            });
        trace.leaving();
    }

    /*
    <summary>
    The application should call this if it wants to suspend the context. This is a CCOW implementation.
    </summary>
    <param name="suspendCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token and status(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>
    </return>
    */

    CCOW.SuspendCommonContext = function (suspendCallback) {

        var trace = Trace("CCOW.SuspendCommonContext");

        //check participant coupon
        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        if (isNullOrUndefined(participantCoupon)) {
            throw Caradigm.IAM.Exception.ParticipantCouponInvalidException;
        }

        //create HTTP request
        var requestURL = CCOW.CreateRequestURL("ContextManager", "SuspendParticipation")
                                        + "&participantCoupon=" + participantCoupon;

        trace.log("contextManagerURL = ", requestURL);

        //send HTTP request to Suspend context
        HttpRequest("POST", requestURL,
        //callback to handle suspendCommonContext response
            function (request) {
                try {
                    trace.entering("suspendCommonContext Callback");

                    //default is invalid status
                    var status = Caradigm.IAM.Failure;

                    //check if HTTP request was successful
                    if (request.status == Caradigm.IAM.HTTPResponse.Success) {
                        trace.log("Inside suspendCommonContext HTTP request success");
                        trace.log("suspendCommonContext response is ", request.responseText);

                        //response
                        var respSuspendCommonContext = ParseResponse(request.responseText);

                        //analyze the response text to know if context suspend request successful
                        if (request.responseText == "") {
                            trace.log("Suspend request is successful");

                            //Suspend success
                            status = Caradigm.IAM.Success;
                            trace.log("suspendCallback Status =", status);

                            //call JS interface callback
                            suspendCallback(status);
                        } else if ('exception' in respSuspendCommonContext) {
                            trace.log("CCOW Exception in SuspendCommonContext HTTP response");

                            //convert response text to correct status code
                            status = getStatusCodeAndDeleteCookie(respSuspendCommonContext.exception);

                            //call JS interface callback
                            suspendCallback(status);
                        } else {
                            trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                            status = Caradigm.IAM.Exception.InvalidMessageException;
                            suspendCallback(status);
                        }
                    } else {
                        trace.error("Inside SuspendCommonContext HTTP(s) request failure", request.status);
                        status = getHTTPStatusCode(request.status);
                        suspendCallback(status);
                    }
                    trace.leaving();
                } catch (e) {
                    // an exception here is likely a serious error in our code
                    trace.exception(e);

                    status = StatusCodeFromException(e);
                    suspendCallback(status);
                }
            });
        trace.leaving();

    }

    /*
    <summary>
    The application should call this if it wants to resume the context and set the most recent ContextCoupon. This is a CCOW implementation.
    </summary>
    <param name="resumeCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token and status(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>
    </return>
    */
    CCOW.ResumeCommonContext = function (resumeCallback) {

        var trace = Trace("CCOW.ResumeCommonContext");

        //check participant coupon
        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        if (isNullOrUndefined(participantCoupon)) {
            throw Caradigm.IAM.Exception.ParticipantCouponInvalidException;
        }

        //create HTTP request
        var requestURL = CCOW.CreateRequestURL("ContextManager", "ResumeParticipation")
                                        + "&participantCoupon=" + participantCoupon + "&wait=1";

        trace.log("contextManagerURL = ", requestURL);

        //send HTTP request to Resume context
        HttpRequest("POST", requestURL,
        //callback to handle ResumeCommonContext response
            function (request) {
                try {
                    trace.entering("ResumeCommonContext Callback");

                    //default is invalid status
                    var status = Caradigm.IAM.Failure;

                    //check if HTTP request was successful
                    if (request.status == Caradigm.IAM.HTTPResponse.Success) {
                        trace.log("Inside ResumeCommonContext HTTP request success");
                        trace.log("ResumeCommonContext response is ", request.responseText);

                        //response
                        var respResumeCommonContext = ParseResponse(request.responseText);

                        //analyze the response text to know if context resume request successful
                        if (request.responseText == "") {
                            trace.log("Resume request is successful");

                            //Resume success
                            status = Caradigm.IAM.Success;
                            resumeCallback(status);

                        } else if ('exception' in respResumeCommonContext) {

                            trace.log("CCOW Exception in ResumeCommonContext HTTP response");
                            status = getStatusCodeAndDeleteCookie(respResumeCommonContext.exception);
                            resumeCallback(status);

                        } else {
                            trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                            status = Caradigm.IAM.Exception.InvalidMessageException;
                            resumeCallback(status);
                        }
                    } else {
                        trace.error("Inside ResumeCommonContext HTTP(s) request failure", request.status);
                        status = getHTTPStatusCode(request.status);
                        resumeCallback(status);
                    }
                    trace.leaving();
                } catch (e) {
                    // an exception here is likely a serious error in our code
                    trace.exception(e);

                    status = StatusCodeFromException(e);
                    resumeCallback(status);
                }
            });
        trace.leaving();
    }

    /*
    <summary>
    Application calls this method to get the current context i.e. which subject (user, patient) is in the context at that very moment.
    </summary>
    <param name="changeOnly">The input changeOnly is a boolean value. If true, only the changed context items will be retrieved. 
    Otherwise, all the context items will be returned.</param>

    <param name="getContextCallback">This is a callback method object. Web-app needs to implement code in
    this method at their end to capture the token ,status and context dictionary (explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method.
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>

    <param name="contextDict">contextDict is an array (Associated array) which has key-value pair. This array has context item information present in it.
    The web-app can use this information to get subject related data.</param>
    </return>
    */

    CCOW.GetCommonContext = function (changeOnly, getContextCallback) {

        var trace = Trace("CCOW.GetCommonContext");

        //check participant coupon
        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        if (isNullOrUndefined(participantCoupon)) {
            throw Caradigm.IAM.Exception.ParticipantCouponInvalidException;
        }

        //Get Most recent context coupon
        CCOW.GetMostRecentContextCoupon(
        //callback to handle GetMostRecentContextCoupon response
            function (request) {
                try {
                    trace.entering("CCOW.GetMostRecentContextCoupon Callback");

                    //default is invalid status
                    var status = Caradigm.IAM.Failure;

                    //Array to store context item-value pairs
                    var contextDict = new Array();

                    //Check if HTTP request is successful
                    if (request.status == Caradigm.IAM.HTTPResponse.Success) {
                        //HTTP response success
                        trace.log("Inside CCOW.GetMostRecentContextCoupon HTTP response success");

                        //save response locally
                        var respGetMostRecentCoupon = ParseResponse(request.responseText);

                        //analyze the response text to check if context coupon value is received
                        if ('contextCoupon' in respGetMostRecentCoupon) {
                            var contextCoupon = respGetMostRecentCoupon.contextCoupon;

                            //check if context coupon is empty
                            if (isNullOrUndefined(contextCoupon)) {
                                trace.error("Context Coupon is invalid");

                                status = Caradigm.IAM.Exception.ContextCouponInvalidException;
                                getContextCallback(status, contextDict);
                                return;
                            }

                            if (contextCoupon == 0) {
                                trace.log("context coupon", contextCoupon);
                                SetSessionData("Caradigm_IAM_ContextCoupon", contextCoupon);
                                status = Caradigm.IAM.Success;
                                getContextCallback(status, contextDict);
                                return;
                            }

                            trace.log("Context Coupon", contextCoupon);
                            SetSessionData("Caradigm_IAM_ContextCoupon", contextCoupon);

                            //create HTTP request to Get the common context
                            var requestURL = CCOW.CreateRequestURL("ContextData", "GetItemNames") + "&contextCoupon=" + contextCoupon;
                            trace.log("contextManagerURL = ", requestURL);

                            //send HTTP request to get context
                            HttpRequest("POST", requestURL,
                            //callback to handle GetItemNames response
                                function (request) {
                                    try {
                                        trace.entering("GetItemNames Callback");

                                        //check if HTTP request was successful
                                        if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                                            trace.log("Inside GetItemNames HTTP request success");
                                            trace.log("GetItemNames response is ", request.responseText);

                                            //save response locally
                                            var respGetCommonContext = ParseResponse(request.responseText);

                                            //check if response contains CCOW exception
                                            if ('names' in respGetCommonContext) {

                                                //Create URL to get context items value
                                                var requestURL = CCOW.CreateRequestURL("ContextData", "GetItemValues")
                                                                        + "&participantCoupon=" + GetSessionData("Caradigm_IAM_ParticipantCoupon")
                                                                        + "&itemNames=" + respGetCommonContext.names
                                                                        + "&onlyChanges=" + changeOnly
                                                                        + "&contextCoupon=" + contextCoupon;

                                                //Send HTTP request to get context items value
                                                HttpRequest("POST", requestURL,
                                                //callback to handle getCommonContextValues response
                                                    function (request) {
                                                        try {
                                                            trace.entering("GetItemValues Callback");

                                                            //check if HTTP request was successful
                                                            if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                                                                var respGetItemValues = ParseResponse(request.responseText);
                                                                //Analyze response text if it contains itemValues
                                                                if ('itemValues' in respGetItemValues) {
                                                                    trace.log("Inside GetItemValues HTTP request success");

                                                                    //save response locally
                                                                    trace.log("GetItemValues response is ", respGetItemValues.itemValues);

                                                                    //split the key-value pairs with '|'
                                                                    var keyValue = (respGetItemValues.itemValues).split("|");

                                                                    //populate all key-value pairs in the array
                                                                    for (var i = 0; i < keyValue.length; i += 2) {
                                                                        contextDict[keyValue[i]] = keyValue[i + 1];
                                                                    }

                                                                    status = Caradigm.IAM.Success;
                                                                    trace.log("getContextCallback Status =", status);
                                                                    getContextCallback(status, contextDict);

                                                                } else if ('exception' in respGetItemValues) {
                                                                    trace.log("CCOW Exception in GetItemValues HTTP response");
                                                                    status = getStatusCodeAndDeleteCookie(respGetItemValues.exception);
                                                                    getContextCallback(status, contextDict);

                                                                } else {
                                                                    trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                                    status = Caradigm.IAM.Exception.InvalidMessageException;
                                                                    getContextCallback(status, contextDict);

                                                                }
                                                            } else {
                                                                trace.error("Inside GetItemValues HTTP(s) request failure", request.status);
                                                                status = getHTTPStatusCode(request.status);
                                                                getContextCallback(status, contextDict);
                                                            }
                                                            trace.leaving();
                                                        } catch (e) {
                                                            // an exception here is likely a serious error in our code
                                                            trace.exception(e);

                                                            status = StatusCodeFromException(e);
                                                            getContextCallback(status, contextDict);
                                                        }
                                                    });

                                            } else if ('exception' in respGetCommonContext) {
                                                trace.log("CCOW Exception in GetItemValues HTTP response");
                                                status = getStatusCodeAndDeleteCookie(respGetCommonContext.exception);
                                                getContextCallback(status, contextDict);

                                            } else {
                                                trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                status = Caradigm.IAM.Exception.InvalidMessageException;
                                                getContextCallback(status, contextDict);
                                            }
                                        } else {
                                            //handle HTTP request failure
                                            trace.error("Inside GetItemNames HTTP(s) request failure ", request.status);
                                            status = getHTTPStatusCode(request.status);
                                            getContextCallback(status, contextDict);
                                        }
                                        trace.leaving();
                                    } catch (e) {
                                        // an exception here is likely a serious error in our code
                                        trace.exception(e);

                                        status = StatusCodeFromException(e);
                                        getContextCallback(status, contextDict);
                                    }
                                });
                        } else if ('exception' in respGetMostRecentCoupon) {
                            trace.log("CCOW Exception in GetMostRecentContextCoupon HTTP response");
                            status = getStatusCodeAndDeleteCookie(respGetMostRecentCoupon.exception);
                            getContextCallback(status, contextDict);

                        } else {
                            trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                            status = Caradigm.IAM.Exception.InvalidMessageException;
                            getContextCallback(status, contextDict);
                        }
                    } else {
                        trace.error("Inside CCOW.GetMostRecentContextCoupon HTTP(s) request failure", request.status);
                        status = getHTTPStatusCode(request.status);
                        getContextCallback(status, contextDict);
                    }
                    trace.leaving();
                } catch (e) {
                    // an exception here is likely a serious error in our code
                    trace.exception(e);

                    status = StatusCodeFromException(e);
                    getContextCallback(status, contextDict);
                }
            });
        trace.leaving();
    }

    /*
    <summary>
    This method allows an application to set the context for a subject that the application selected.
    An application may only set the context data when it is joined to the context. In general, 
    only the application that instigated the context change should set the context data.
    It sets context items from the array  ("items" argument) to context manager.
    </summary>
    
    <param name="itemsDict">This is an array (Associated array ) which has key- value pair that contains
    the information needed to set a new context i.e. data related to subject.</param>
    
    <param name="forceChange">The input forceChange is a boolean. If forceChange= false and the other applications
    respond with conditional accept during the context change, this context change will be canceled.
    Otherwise, the change will be committed. However, if any application does not respond to survey within a timeframe,
    context change will be canceled regardless of this parameter.
    If all applications have accepted the proposed context change without a condition, the context change will be committed.
    </param>

    <param name="setContextCallback">This is a callback method object. Web-app needs to implement code in 
    this method at their end to capture the token, status and context item dictionary(explained below) that is passed to this callback function.
    This callback function will be invoked from the JS SDK as a response after successful and failed execution of this method
    </param>

    Callback Details
    <return>
    <param name="status">If the request succeeds then status will be Caradigm.IAM.Success
    If the method failed status will contain an error code.</param>
    
    <param name="noContinue">Boolean that indicate if the context change can be carried out or not.
    If true, the context change cannot be committed. This is the case if any other application does not respond to survey.
    If this is the case, there is no point for this application to force the context change by setting forceChange is true.
    If false, context change can be committed.</param>
    
    <param name="responseList">responseList is a list of responses from participating applications.
    Each response is a user displayable reason why the application cannot accept a context change at this time.
    Some applications may choose to not provide a reason. The web-app should present this list of reasons to the end-user to let user decide what action to take.
    If this list is empty, the context change has been committed. If it is not, the context change has been canceled.</param>
    </return>
    */

    CCOW.SetCommonContext = function (itemsDict, forceChange, setContextCallback) {

        var trace = Trace("CCOW.SetCommonContext");

        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        if (isNullOrUndefined(participantCoupon)) {
            throw Caradigm.IAM.Exception.ParticipantCouponInvalidException;
        }

        //specifies if context change can be done. 
        //false; go ahead with context change, true:context change not possible
        var noContinue = false;

        //list of reasons from other applications if context change is not possible
        var responseList = "";

        //flag to indicate the transaction start state.
        var contextChangeStarted = false;

        //flag to indicate the EndContextChange transaction state.
        var contextChangeEnded = false;

        //stores items names and values
        var ItemNames = [];
        var ItemValues = [];

        //separate names and values in items dictionary
        for (var name in itemsDict) {
            ItemNames.push(name);
            ItemValues.push(itemsDict[name]);
        }

        //concatenate item names and values by '|'
        var vbar_names = ItemNames.join("|");
        var vbar_values = ItemValues.join("|");

        //Start context change
        CCOW.StartContextChange(
        //callback to handle StartContextChange response
            function (request) {
                try {
                    trace.entering("CCOW.StartContextChange Callback");

                    //default is invalid status
                    var status = Caradigm.IAM.Failure;

                    //Check if HTTP request is successful
                    if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                        //HTTP response success
                        trace.log("Inside CCOW.StartContextChange HTTP response success");

                        //parse response
                        var response = ParseResponse(request.responseText);

                        //Analyze response text if it contains context coupon value.
                        if ('contextCoupon' in response) {

                            //warn if context coupon is empty
                            var contextCoupon = response.contextCoupon;
                            if (!contextCoupon) {
                                trace.warn("Context Coupon is empty in CCOW.StartContextChange");

                                status = Caradigm.IAM.Exception.ContextCouponInvalidException;
                                setContextCallback(status, noContinue, responseList);
                                return;
                            }

                            // Set flag 'contextChangeStarted' to true.
                            contextChangeStarted = true;
                            trace.log("ContextCoupon=", contextCoupon);
                            trace.log("itemNames=", vbar_names);
                            trace.log("ItemValues=", vbar_values);

                            //Encode context Name and Value array.
                            ItemNames = encodeURIComponent(vbar_names);
                            ItemValues = encodeURIComponent(vbar_values);

                            //create HTTP request to set the  context
                            var requestURL = CCOW.CreateRequestURL("ContextData", "SetItemValues")
                                                    + "&participantCoupon=" + GetSessionData("Caradigm_IAM_ParticipantCoupon")
                                                    + "&itemNames=" + vbar_names
                                                    + "&itemValues=" + vbar_values
                                                    + "&contextCoupon=" + contextCoupon;

                            //send HTTP request to get context
                            trace.log("contextManagerURL = ", requestURL);

                            HttpRequest("POST", requestURL,
                            //callback to handle SetItemValues response
                                function (request) {
                                    try {
                                        trace.entering("SetItemValues Callback");

                                        //check if HTTP request was successful
                                        if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                                            //HTTP request success
                                            trace.log("Inside SetItemValues HTTP request success");
                                            trace.log("SetItemValues response is ", request.responseText);

                                            //save response locally
                                            var respSetCommonContext = ParseResponse(request.responseText);

                                            //check if response does not contain CCOW exception
                                            if ((request.responseText == "")) {

                                                //Call EndContextChange
                                                CCOW.EndContextChange(contextCoupon,
                                                //callback to handle EndContextChange response
                                                function (request) {
                                                    try {
                                                        trace.entering("CCOW.EndContextChange Callback");

                                                        //check if HTTP request was successful
                                                        if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                                                            //HTTP request success
                                                            trace.log("Inside EndContextChange HTTP request success");
                                                            trace.log("EndContextChange response is ", request.responseText);

                                                            //response
                                                            var response = ParseResponse(request.responseText,
                                                                                            { noContinue: bool
                                                                                            });

                                                            if ('noContinue' in response) {
                                                                noContinue = response.noContinue;
                                                                responseList = decode_ccowstring(response.responses);

                                                                //set flag 'contextChangeEnded' to true i.e EndContextChange transaction success.
                                                                contextChangeEnded = true;

                                                                //Reset flag 'contextChangeStarted' to false.
                                                                contextChangeStarted = false;

                                                                //Context change will be committed if 
                                                                //(forceChange is false and noContinue is false and responsList is empty)
                                                                //OR (forceChange is true and noContinue is false)
                                                                //otherwise context change will be canceled.
                                                                if ((forceChange == false && noContinue == false && response.responses.length == 0)
                                                                    || (forceChange == true && noContinue == false)) {

                                                                    //commit context change
                                                                    CCOW.CommitContextChange(contextCoupon,
                                                                    //callback to handle CommitContextChange response
                                                                        function (request) {
                                                                            try {
                                                                                trace.entering("CCOW.CommitContextChange Callback");

                                                                                //check if HTTP request was successful
                                                                                if (request.status == Caradigm.IAM.HTTPResponse.Success) {
                                                                                    trace.log("Inside CommitContextChange HTTP request success");
                                                                                    trace.log("CommitContextChange response is ", request.responseText);

                                                                                    //Send notification to locator.
                                                                                    CCOW.SendNotification(function (request) {
                                                                                        //handle callback
                                                                                    });

                                                                                    //save response locally
                                                                                    var respCommitContextChange = ParseResponse(request.responseText);

                                                                                    if ('listenerURLs' in respCommitContextChange) {
                                                                                        status = Caradigm.IAM.Success;
                                                                                        contextChangeEnded = false;
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    } else if ('exception' in respCommitContextChange) {
                                                                                        trace.log("CCOW Exception in CommitContextChange HTTP response");

                                                                                        //convert response text to correct status code
                                                                                        status = getStatusCodeAndDeleteCookie(respCommitContextChange.exception);
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    } else {
                                                                                        trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                                                        status = Caradigm.IAM.Exception.InvalidMessageException;
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    }
                                                                                } else {
                                                                                    trace.error("Inside CCOW.CommitContextChange HTTP(s) request failure", request.status);
                                                                                    status = getHTTPStatusCode(request.status);
                                                                                    setContextCallback(status, noContinue, responseList);

                                                                                }
                                                                                trace.leaving();
                                                                            } catch (e) {
                                                                                // exception in CCOW.CommitContextChange
                                                                                trace.exception(e);

                                                                                status = StatusCodeFromException(e);
                                                                                setContextCallback(status, noContinue, responseList);
                                                                            }
                                                                        });

                                                                } else {
                                                                    //cancel context change
                                                                    CCOW.CancelContextChange(contextCoupon,
                                                                    //callback to handle CancelContextChange response
                                                                        function (request) {
                                                                            try {
                                                                                trace.entering("CCOW.CancelContextChange Callback");

                                                                                //check if HTTP response is successful
                                                                                if (request.status == Caradigm.IAM.HTTPResponse.Success) {

                                                                                    //success
                                                                                    trace.log("Inside CancelContextChange HTTP request success");
                                                                                    trace.log("CancelContextChange response is ", request.responseText);

                                                                                    //save response locally
                                                                                    var respCancelContextChange = ParseResponse(request.responseText);
                                                                                    if ('listenerURLs' in respCancelContextChange) {
                                                                                        status = Caradigm.IAM.Canceled;
                                                                                        contextChangeEnded = false;
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    } else if ('exception' in respCancelContextChange) {
                                                                                        trace.log("CCOW Exception in CancelContextChange HTTP response");
                                                                                        status = getStatusCodeAndDeleteCookie(respCancelContextChange.exception);
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    } else {
                                                                                        trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                                                        status = Caradigm.IAM.Exception.InvalidMessageException;
                                                                                        setContextCallback(status, noContinue, responseList);

                                                                                    }
                                                                                } else {
                                                                                    trace.error("Inside CancelContextChange HTTP(s) request failure", request.status);
                                                                                    trace.log("responseList=", responseList, " noContinue=", noContinue);

                                                                                    status = getHTTPStatusCode(request.status);
                                                                                    setContextCallback(status, noContinue, responseList);
                                                                                }
                                                                                trace.leaving();
                                                                            } catch (e) {
                                                                                // exception in CCOW.CancelContextChange
                                                                                trace.exception(e);

                                                                                status = StatusCodeFromException(e);
                                                                                setContextCallback(status, noContinue, responseList);
                                                                            }
                                                                        });
                                                                }

                                                            } else if ('exception' in response) {
                                                                trace.log("CCOW Exception in EndContextChanges HTTP response");

                                                                //convert response text to correct status code
                                                                status = getStatusCodeAndDeleteCookie(request.responseText);
                                                                trace.log("setContextCallback exception=", status);

                                                                //call JS callback
                                                                setContextCallback(status, noContinue, responseList);

                                                            } else {
                                                                trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                                status = Caradigm.IAM.Exception.InvalidMessageException;
                                                                setContextCallback(status, noContinue, responseList);
                                                            }
                                                        } else {
                                                            //handle HTTP request failure
                                                            trace.error("EndContextChanges HTTP(s) request fail", request.status, request.status);
                                                            contextCleanup(contextChangeStarted, contextChangeEnded, contextCoupon);
															status = getHTTPStatusCode(request.status);
                                                            setContextCallback(status, false, []);
                                                        }
                                                        trace.leaving();
                                                    } catch (e) {
                                                        // exception in CCOW.EndContextChanges
                                                        trace.exception(e);
                                                        contextCleanup(contextChangeStarted, contextChangeEnded, contextCoupon);
                                                        status = StatusCodeFromException(e);
                                                        setContextCallback(status, noContinue, responseList);
                                                    }
                                                });
                                            } else if ('exception' in respSetCommonContext) {
                                                trace.log("CCOW Exception in SetItemValues HTTP response");

                                                //convert response text to correct status code
                                                status = getStatusCodeAndDeleteCookie(respSetCommonContext.exception);
                                                trace.log("responseList=", responseList, " noContinue=", noContinue);
                                                setContextCallback(status, noContinue, responseList);

                                            } else {
                                                trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                                                status = Caradigm.IAM.Exception.InvalidMessageException;
                                                setContextCallback(status, noContinue, responseList);
                                            }
                                        } else {
                                            trace.error("Inside SetItemValues HTTP(s) request failure ", request.status);
                                            status = getHTTPStatusCode(request.status);
                                            trace.log("responseList=", responseList, "noContinue=", noContinue);

                                            //call JS callback
                                            setContextCallback(status, noContinue, responseList);
                                        }
                                        trace.leaving();
                                    } catch (e) {
                                        // exception in CCOW.SetItemValues
                                        trace.exception(e);

                                        status = StatusCodeFromException(e);
                                        contextCleanup(contextChangeStarted, contextChangeEnded, contextCoupon);
                                        setContextCallback(status, noContinue, responseList);
                                    }
                                });

                        } else if ('exception' in response) {
                            trace.log("CCOW Exception in StartContextChange HTTP response");

                            //convert response text to correct status code
                            status = getStatusCodeAndDeleteCookie(response.exception);
                            setContextCallback(status, noContinue, responseList);

                        } else {
                            trace.error(Caradigm.IAM.ErrorMessage.InvalidMessage, request.responseText);
                            status = Caradigm.IAM.Exception.InvalidMessageException;
                            setContextCallback(status, noContinue, responseList);
                        }
                    } else {
                        trace.error("Inside StartContextChange HTTP(S) request failure ", request.status);
                        status = getHTTPStatusCode(request.status);

                        trace.log("noContinue=", noContinue, "responseList=", responseList);
                        setContextCallback(status, noContinue, responseList);
                    }
                    trace.leaving();
                } catch (e) {
                    // exception in CCOW.StartContextChange
                    trace.exception(e);

                    status = StatusCodeFromException(e);
                    contextCleanup(contextChangeStarted, contextChangeEnded, contextCoupon);
                    setContextCallback(status, noContinue, responseList);
                }
            });

        trace.leaving();
    }

    ///////////////////////////////////////////////////////////////////////////
    // LocateContextManager callback handler
    function LocateContextManagerHandler(request, localcache, getCMUrlCallback) {
        var trace = Trace("LocateContextManagerHandler");

        function respondCMUrl(status, CMUrl, CMUrlSig) {
            if (getCMUrlCallback)
                getCMUrlCallback(status, CMUrl, CMUrlSig);

        }

        try {
            // Check if web request is successful
            var status = request.status;
            if (Caradigm.IAM.HTTPResponse.Success == status)
                trace.log("HTTP status:", status, request.responseText);

            else {
                if (Caradigm.IAM.HTTPResponse.ConnectionDenied == status)
                    status = Caradigm.IAM.HTTPStatusCode.LocatorConnectFail;

                trace.error("HTTP(S) request failure", status);
                respondCMUrl(status, "");
                return trace.leaving();
            }

            //analyze the response text to check if componentUrl value is received
            var respLocator = ParseResponse(request.responseText);
            if ('componentUrl' in respLocator) {

                //save response locally
                var persistPort = respLocator.persistPort;
                persistPort = (persistPort) ? persistPort : "8102";

                var componentURL = respLocator.componentUrl;
                var componentParameters = respLocator.componentParameters;
                var CMUrl = componentURL + "?" + componentParameters
                if ('site' in respLocator) CMUrl += "&site=" + respLocator.site;
                if ('nonce' in respLocator) CMUrl += "&nonce=" + respLocator.nonce;

                trace.info("persistPort:", persistPort);
                trace.info("componentUrl", componentURL);
                trace.info("componentParameters", componentParameters);

                var CMUrlSig = respLocator.signature || "";

                //set session storage data for CM URL if it is desirable. The only time localcache is true is when participant calls JoinAsync. Other cases localcache should be false. This includes
				//1. GetContextManager call. This call is for legacy web app to retrieve CMUrl and hand over to web server to join context instead of using JavaScript to join context. This is the server participant approach
				// instead of client participant approach. 
				//2. cacheable = true. This is the case locator returns a cached CMUrl. Participant cannot use this to join context since it does not contains cpid value. Instead, participant can use thie CMUrl to get current
				// context data. This is used by IDP to retrieve current context data. In addition to CMUrl returned by locator, a signature is also returned.
				if(localcache)
				{
					SetSessionData("Caradigm_IAM_CMUrl", CMUrl);
					SetSessionData("Caradigm_IAM_CMUrlSig", CMUrlSig);
					SetSessionData("Caradigm_IAM_persistPort", persistPort);
				}
                respondCMUrl(status, CMUrl, CMUrlSig);
            }

            else {
                respondCMUrl(status, "");
            }
        }
        catch (e) {
            // an exception here is likely a serious error in our code
            trace.exception(e);
            status = StatusCodeFromException(e);
            respondCMUrl(status, "");
        }

        trace.leaving();
    }

    ///////////////////////////////////////////////////////////////////////////
    //nonce is a unique string based on time stamp.
    //cacheable: if true, javascript get CMUrl from Locator's cache. If false,
    //Javascript gets from local session. If it does not exist, Javascript
    //get it from Locator. Locator cannot return the cached value. Instead,
    //locator has to get it from the vault.
	//enforceHttps -- if true, the cmUrl will always be https regardless what locator returns. 
    CCOW.GetCMUrl = function (nonce, cacheable, enforceHttps, getCMUrlCallback) {
        var trace = Trace("CCOW.GetCMUrl");

        // check nonce, cacheable
        nonce = nonce || "";

        // if we have a cmurl, return it in callback. However, if cacheable is true, do not get it from
        // local session. Instead, always get it from locator's cache.
        if (!cacheable) {
            var CMUrl = GetSessionData("Caradigm_IAM_CMUrl");
            var CMUrlSig = GetSessionData("Caradigm_IAM_CMUrlSig");

            if (CMUrl)
                return setTimeout(function () {
                    if (getCMUrlCallback)
                        getCMUrlCallback(Caradigm.IAM.Success, CMUrl, CMUrlSig)
                }, 0);
        }

        // do we have a valid guid?
        var guid = GetSessionData("Caradigm_IAM_guid");
        if (!guid) {
            guid = getGUID();
            SetSessionData("Caradigm_IAM_guid", guid);
        }

        //generate context participant URL with local host and GUID
        var contextParticipantUrl = dynamicUrl(
                            (enforceHttps) ? Caradigm.IAM.ParticipantConnect.required_protocol:"",
                            Caradigm.IAM.ParticipantConnect.default_url,
                            guid);

        CCOW.LocateContextManager("", contextParticipantUrl, nonce, cacheable,
        //callback to handle CCOW.LocateContextManager response
            function (request) {
			//if cacheable is true, it means the CMUrl is a cached value from locator. In this case, do not cache locally again
			//in the session storage.
                var cachelocal = cacheable?false:true;
                LocateContextManagerHandler(request, cachelocal, getCMUrlCallback);
            });

    }

    /*
    <summary>
    This method send notification to locator after context committed successfully.
    </summary>

    <param name="callback">
    Callback method passed to return back the HTTP response
    </param>

    <return>
    None
    </return>
    */
    CCOW.SendNotification = function (callback) {

        var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");
        var persistPort = GetSessionData("Caradigm_IAM_persistPort");
        var guid = GetSessionData("Caradigm_IAM_guid");

        var url = LocatorUrl() + "?interface=ContextManagementRegistry"
                                    + "&method=Notification"
                                    + "&participantCoupon=" + participantCoupon
                                    + "&message=Context committed"
                                    + "&cpid=" + guid;

        HttpRequest("GET", url, callback);
    }

    /*
    <summary>
    Contacts VergenceLocator service hosted on local host to get Context Manager URL
    </summary>

    <param name="descriptiveData" />

    <param name="contextParticipantUrl">
    URL from local host with unique context participant id
    </param>

    <param name="callback">
    Callback method passed from join to return back the HTTP response
    </param>

    <return>
    None
    </return>
    */
    CCOW.LocateContextManager = function (descriptiveData, contextParticipantUrl, nonce, cacheable, callback) {

        var trace = Trace("CCOW.LocateContextManager");
        var connstring = (nonce) ? "&connkey=" + encodeURIComponent(nonce) : "";

        //create request URL
        var locateRequestUrl = LocatorUrl() + "?interface=ContextManagementRegistry" +
                                      "&method=Locate" +
                                      "&componentName=CCOW.ContextManager" +
                                      "&version=1.2" +
                                      "&descriptiveData=" + encodeURIComponent(descriptiveData) +
                                      "&contextParticipant=" + encodeURIComponent(contextParticipantUrl) +
                                      connstring +
                                      "&cacheable=" + cacheable +
                                      "&WinRTApp=true";

        //send HTTP request
        HttpRequest("GET", locateRequestUrl, callback);

        trace.leaving();
    }

    /*
    <summary>
    Get context coupon of Most recent committed context
    </summary>
    <param name="callback">
    Callback method passed from getCommonContext to return back the HTTP response
    </param>

    <return>
    None
    </return>
    */
    CCOW.GetMostRecentContextCoupon = function (callback) {

        var trace = Trace("CCOW.GetMostRecentContextCoupon");

        //create HTTP request to get most recent context Coupon
        var requestURL = CCOW.CreateRequestURL("ContextManager", "GetMostRecentContextCoupon");

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }

    /*
    <summary>
    Starts the context transaction before setting the context
    </summary>

    <param name="callback">
    Callback to handle the response
    </param>

    <return>
    None
    </return>
    */
    CCOW.StartContextChange = function (callback) {

        var trace = Trace("CCOW.StartContextChange");

        //create HTTP request to Start Context Change
        var requestURL = CCOW.CreateRequestURL("ContextManager", "StartContextChanges")
                                + "&participantCoupon=" + GetSessionData("Caradigm_IAM_ParticipantCoupon");

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }

    /*
    <summary>
    Ends the context transaction using context coupon
    </summary>

    <param name="contextCoupon">
    Context Coupon received from context change initiation
    </param>

    <param name="callback">
    Callback to handle the response
    </param>

    <return>
    None
    </return>
    */
    CCOW.EndContextChange = function (contextCoupon, callback) {

        var trace = Trace("CCOW.EndContextChange");

        //create HTTP request to EndContextChange
        var requestURL = CCOW.CreateRequestURL("ContextManager", "EndContextChanges") + "&contextCoupon=" + contextCoupon;

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }

    /*
    <summary>
    Publish the context change on Vault
    </summary>

    <param name="contextCoupon">
    Context Coupon received from context change initiation
    </param>

    <param name="callback">
    Callback to handle the response
    </param>

    <return>
    None
    </return>
    */
    CCOW.CommitContextChange = function (contextCoupon, callback) {

        var trace = Trace("CCOW.CommitContextChange");

        //create HTTP request to CommitContextChange
        var requestURL = CCOW.CreateRequestURL("ContextManager", "PublishChangesDecision")
                                    + "&contextCoupon=" + contextCoupon
                                    + "&" + "decision=accept";

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }

    /*
    <summary>
    Cancels context change transaction
    </summary>

    <param name="contextCoupon">
    Context Coupon received from context change initiation
    </param>

    <param name="callback">
    Callback to handle the response
    </param>

    <return>
    None
    </return>
    */
    CCOW.CancelContextChange = function (contextCoupon, callback) {

        var trace = Trace("CCOW.CancelContextChange");

        //create HTTP request to CancelContextChange
        var requestURL = CCOW.CreateRequestURL("ContextManager", "PublishChangesDecision")
                                    + "&contextCoupon=" + contextCoupon
                                    + "&" + "decision=cancel";

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }

    /*
    <summary> UndoContextChange
    Discards any changes to proposed context.
    </summary>

    <param name="contextCoupon">
    Context Coupon received from context change initiation
    </param>

    <param name="callback">
    Callback to handle the response
    </param>

    <return>
    None
    </return>
    */
    CCOW.UndoContextChange = function (contextCoupon, callback) {

        var trace = Trace("CCOW.UndoContextChange");

        //create HTTP request to UndoContextChange
        var requestURL = CCOW.CreateRequestURL("ContextManager", "UndoContextChanges")
                                    + "&contextCoupon=" + contextCoupon;

        //send HTTP request
        HttpRequest("POST", requestURL, callback);
        trace.leaving();
    }
    /*
    <summary>
    Format context Manager URL
    </summary>

    <param name="interface">
    Name of interface
    </param>

    <param name="method">
    Method which will be invoked form the interface
    </param>

    <return>
    None
    </return>
    */

    CCOW.CreateRequestURL = function (_interface, method) {

        var trace = Trace.defer("CCOW.CreateRequestURL");

        //generate URL
        var url = (GetSessionData("Caradigm_IAM_CMUrl") + "&interface=" + _interface + "&method=" + method);
        trace.log("Request URL: " + url);
        return url;
    }

    /*
    <summary>
    Format Composite URL returned from Locator.
    </summary>

    <param name="inputURL">
    Raw CM URL as input
    </param>

    <return>
    None
    </return>
    */

    CCOW.CreateCMURL = function (inputURL) {

        var trace = Trace("CCOW.CreateCMURL");

        var formattedURL;   //stores CM URL
        var params = inputURL.split("&");   //split parameters by '&'

        //get protocol part of URL
        var param = params[0].split("=");   //split key-value pairs by '='
        formattedURL = decodeURIComponent(param[1]);

        //get desktop id part
        param = params[1].split("=");
        formattedURL += "?" + decodeURIComponent(param[1]);

        //get serial number part
        param = params[2].split("=");
        formattedURL += "&site=" + param[1];

        trace.log("CM URL: ", formattedURL);
        trace.leaving();

        return formattedURL;
    }

    /*
    <summary>
    Validates Coupon
    </summary>

    <param name="coupon">
    Coupon text to be validated
    </param>

    <return>
    true: If Coupon is valid
    false: If Coupon value is invalid
    </return>
    */

    CCOW.ValidateCoupon = function (coupon) {

        var trace = Trace.defer("CCOW.ValidateCoupon");

        //get RegEx pattern to validate Coupon.
        //Coupon is of 10 digits with only numbers
        var valid = false;

        //verify if coupon value is of correct format
        if (coupon.match(Validation_Patterns.NumberOnly)) {
            trace.log("valid coupon", coupon);

            //valid coupon
            valid = true;
        } else {
            trace.error("invalid coupon", coupon);

            //invalid coupon
            valid = false;
        }

        return valid;
    }

    ///////////////////////////////////////////////////////////////////////////
    function defaultContextChangePending(coupon, callback) {
        var trace = Trace.defer("Caradigm.IAM.IContextParticipant.OnContextChangePending");
        trace.log("defaultContextChangePending");
        return "";
    }

    function defaultContextChangeAccepted(coupon) {
        var trace = Trace.defer("Caradigm.IAM.IContextParticipant.OnContextChangeAccepted");
        trace.log("defaultContextChangeAccepted");
    }

    function defaultContextChangeCanceled(coupon) {
        var trace = Trace.defer("Caradigm.IAM.IContextParticipant.OnContextChangeCanceled");
        trace.log("defaultContextChangeCanceled");
    }

    function defaultCommonContextTerminated(coupon) {
        var trace = Trace.defer("Caradigm.IAM.IContextParticipant.OnContextTerminated");
        trace.log("defaultCommonContextTerminated");
    }

    ///////////////////////////////////////////////////////////////////////////
    Caradigm.IAM.IContextParticipant =
    {
        OnContextChangePending: defaultContextChangePending,
        OnContextChangeAccepted: defaultContextChangeAccepted,
        OnContextChangeCanceled: defaultContextChangeCanceled,
        OnContextTerminated: defaultCommonContextTerminated
    };

    ///////////////////////////////////////////////////////////////////////////
    function SurveySocket(persistPort, guid, completedcallback) {
        SurveySocket.socket = null;
        SurveySocket.lastStarted = new Date();

        try {
            var trace = Trace("SurveySocket");

            var SurveyUrl = LocatorUrl(true) + "Participant/"
                          + "cpid=" + guid
                          + "&interface=ContextParticipant";

            // attempt create socket
            trace.log("SurveyUrl", SurveyUrl);
            var handler = WebSocket(SurveyUrl,
            {
                onopen: function () {
                    trace.log("success: open");
                    if (completedcallback) {
                        var callback = completedcallback;
                        completedcallback = null;
                        callback(Caradigm.IAM.Success);
                    }
                },

                onerror: function () {
                    SurveySocket.socket = null;
                    handler = null;

                    trace.error("socket error");
                    if (completedcallback) {
                        var callback = completedcallback;
                        completedcallback = null;
                        callback(Caradigm.IAM.HTTPStatusCode.SocketConnectError);
                    }
                },

                onclose: function () {
                    SurveySocket.socket = null;
                    handler = null;

                    trace.error("socket closed");
                    if (completedcallback) {
                        var callback = completedcallback;
                        completedcallback = null;
                        callback(Caradigm.IAM.HTTPStatusCode.SocketConnectClose);
                    }
                },

                onmsg: function (msg, writer) {
                    var trace = Trace.defer("CCOW.SurveySocket.onmsg");
                    var participantCoupon = GetSessionData("Caradigm_IAM_ParticipantCoupon");

                    var response = ParseResponseHeader(msg);
                    var proposedContextCoupon = response.contextCoupon;

                    switch (response.method) {
                        // reply to ping                                         
                        case "Ping":
                            ContextParticipantResponse(writer, Caradigm.IAM.HTTPResponse.Success);
                            break;

                        case "ContextChangesPending":
                            try {
                                trace = Trace.defer("SurveySocket.ContextChangesPending");

                                function deferedreply(reply) {
                                    reply = trim(reply || "");
                                    trace.info("ContextCoupon:", proposedContextCoupon,
                                                "proposed ContextCoupon:", proposedContextCoupon,
                                                "reply:", reply);

                                    // determine decision from reply
                                    var decision = "accept";
                                    if (reply && reply.length > 0) {
                                        decision = "accept_conditional";
                                        reply = reply.replace(" ", "+");
                                    }

                                    // build msg
                                    var msg = "decision=" + decision + "&reason=" + reply;
                                    ContextParticipantResponse(writer, Caradigm.IAM.HTTPResponse.Success, msg);
                                }

                                var contextChangesPending = (Caradigm.IAM.IContextParticipant.OnContextChangePending || defaultContextChangePending);
                                var reply = contextChangesPending(proposedContextCoupon, deferedreply);
                                if (reply !== Caradigm.IAM.DeferReply)
                                    deferedreply(reply);

                            }
                            catch (e) {
                                // if exception in Context Changes Pending, return empty string
                                trace.exception(e, "error in application callback function");
                                deferedreply("");
                            }
                            break;

                        case "ContextChangesAccepted":
                            try {
                                trace = Trace.defer("SurveySocket.ContextChangesAccepted");
                                trace.info("ContextChangesAccepted", proposedContextCoupon);
                                ContextParticipantResponse(writer, Caradigm.IAM.HTTPResponse.Success);

                                var contextChangesAccepted = DeferCallback((Caradigm.IAM.IContextParticipant.OnContextChangeAccepted || defaultContextChangeAccepted));
                                contextChangesAccepted(proposedContextCoupon);

                                // update ContextCoupon
                                SetSessionData("Caradigm_IAM_ContextCoupon", proposedContextCoupon);
                            }
                            catch (e) {
                                trace.exception(e, "error in application callback function");
                            }
                            break;

                        case "ContextChangesCanceled":
                            try {
                                trace = Trace.defer("SurveySocket.ContextChangesCanceled");
                                trace.info("ContextChangesCanceled", proposedContextCoupon);
                                ContextParticipantResponse(writer, Caradigm.IAM.HTTPResponse.Success);

                                var contextChangesCanceled = DeferCallback((Caradigm.IAM.IContextParticipant.OnContextChangeCanceled || defaultContextChangeCanceled));
                                contextChangesCanceled(proposedContextCoupon);
                            }
                            catch (e) {
                                trace.exception(e, "error in application callback function");
                            }
                            break;

                        case "CommonContextTerminated":
                            try {
                                trace = Trace.defer("SurveySocket.CommonContextTerminated");
                                trace.info("CommonContextTerminated", proposedContextCoupon);
                                ContextParticipantResponse(writer, Caradigm.IAM.HTTPResponse.Success);

                                var commonContextTerminated = DeferCallback((Caradigm.IAM.IContextParticipant.OnCommonContextTerminated || defaultCommonContextTerminated));
                                commonContextTerminated(proposedContextCoupon);
                            }
                            catch (e) {
                                trace.exception(e, "error in application callback function");
                            }
                            break;

                        default:
                            // some sort of General Failure (or ignore)
                            trace.warn("invalid message:", msg);
                            break;
                    }
                }
            });

            // close socket of page unload
            var onbeforeunload = function () {
                SurveySocket.close();
            }

            if (window.addEventListener) {                    // For all major browsers, except IE 8 and earlier
                window.addEventListener("beforeunload", onbeforeunload);
            } else if (window.attachEvent) {                  // For IE 8 and earlier versions
                window.attachEvent("onbeforeunload", onbeforeunload);
            }

        } catch (e) {
            trace.exception(e);
        }

        SurveySocket.socket = handler;

        trace.leaving();
    }

    ///////////////////////////////////////////////////////////////////////////
    SurveySocket.close = function () {
        if (SurveySocket.socket) {
            SurveySocket.socket.close();
            SurveySocket.socket = null;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    function ContextParticipantResponse(writer, statusvalue, msgbody) {
        // fix body
        msgbody = (!isNullOrUndefined(msgbody)) ? msgbody : "";

        // map HTTP Response Code
        var responsecode = "200 OK";
        var joinName = GetSessionData("Caradigm_IAM_JoinName") || Caradigm.IAM.Constant.DefaultJoinName;

        // RFC1123 date  ddd, dd mmm yyyy hh:mm:ss GMT
        var hdrs =
        [
            "HTTP/1.0 " + responsecode,
            "Date: " + UTCDate(),
            "Server: " + joinName,
            "MIME-version: 1.0",
            "Content-type: application/x-www-form-urlencoded",
            "Content-length: " + msgbody.length,
            "",
            msgbody
        ];

        var body = hdrs.join("\r\n");
        writer(body);
    }

    /*
    <summary>
    Return StatusCode code from HTTP CCOW response
    </summary>

    <param name="message">
    CCOW error message received from Vault
    </param>

    <return>
    Response code of type Caradigm.IAM.CCOWException
    </return>
    */
    function getStatusCodeAndDeleteCookie(message) {

        var trace = Trace.defer("getStatusCodeAndDeleteCookie");

        //default is failure
        var status = Caradigm.IAM.Failure;

        try {
            //This block checks standard CCOW exceptions and converts them to status codes as defined by JS interface
            if (message.match("AlreadyJoined")) {
                trace.error("AlreadyJoinedException");
                status = Caradigm.IAM.CCOWException.AlreadyJoinedException;
            } else if (message.match("TooManyParticipants")) {
                trace.error("TooManyParticipantsException");
                status = Caradigm.IAM.CCOWException.TooManyParticipantsException;
            } else if (message.match("ContextNotActive")) {
                trace.error("ContextNotActiveException");
                status = Caradigm.IAM.CCOWException.ContextNotActiveException;
            } else if ((message.match("UnknownParticipant")) || (message.match("UnknownSession"))) {
                trace.error("UnknownParticipantException");

                //Delete cookies
                DeleteSessionData();
                status = Caradigm.IAM.CCOWException.UnknownParticipantException;
            } else if (message.match("TransactionInProgress")) {
                trace.error("TransactionInProgressException");
                status = Caradigm.IAM.CCOWException.TransactionInProgressException;
            } else if (message.match("NotInTransaction")) {
                trace.error("NotInTransactionException");
                status = Caradigm.IAM.CCOWException.NotInTransactionException;
            } else if (message.match("GeneralFailure")) {
                trace.error("GeneralFailureException");
                status = Caradigm.IAM.CCOWException.GeneralFailureException;
            } else if (message.match("InvalidTransaction")) {
                trace.error("InvalidTransactionException");
                status = Caradigm.IAM.CCOWException.InvalidTransactionException;
            } else if (message.match("InvalidContextCoupon")) {
                trace.error("InvalidContextCouponException");
                status = Caradigm.IAM.CCOWException.InvalidContextCouponException;
            }
        }
        catch (e) { }

        //Display status value in appropriate format
        displayStatus(status);
        return status;
    }

    ///////////////////////////////////////////////////////////////////////////
    function displayStatus(status) {

        // blank entry avoids needless enter/leave
        var trace = Trace.defer("displayStatus");

        if (status >= 201 && status <= 599) {
            trace.log("status: " + status);
        } else {
            var errCode = "0x" + status.toString(16).toUpperCase();
            trace.log("status: " + errCode);
        }
    }

    //////////////////////////////////////////////////////////////////////////
    // Context cleanup
    function contextCleanup(contextChangeStarted, contextChangeEnded, contextCoupon) {

        var trace = Trace("Context Cleanup");
		
        //If any error occurs after transaction started successfully , must undo the transaction.
        if (contextChangeStarted == true) {
			trace.log("try to undo context change");
            CCOW.UndoContextChange(contextCoupon, function (request) {
                trace.log("UndoContextChange Response : ", request.responseText);
            });
        }
        //If any error occurs before publish change decision success, must cancel the transaction.
        if (contextChangeEnded == true) {
			trace.log("try to cancel context change");
            CCOW.CancelContextChange(contextCoupon, function (request) {
                trace.log("CancelContextChange Response : ", request.responseText);
            });
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    function checkItemDict(itemDict) {
        var flag = false;

        for (var item in itemDict) {

            if (item.indexOf('.') != -1) {
                var ccowString = item.split(".");
                if (ccowString.length >= 3 && ccowString.length <= 4 && !isNullOrUndefined(ccowString)) {
                    for (var key = 0; key <= ccowString.length; key++) {
                        if (!isNullOrUndefined(key)) {
                            flag = true;
                        }
                    }
                }
                else {
                    throw Caradigm.IAM.Exception.ItemDictKeyInvalidArgumentException;
                }
            }
        }
        return flag;
    }

    ///////////////////////////////////////////////////////////////////////////
    function WebSocket(url, handler) {
        var ws = null;

        try {
            var trace = Trace("WebSocket");
            ws = new window.WebSocket(url);

            if (!ws) {
                trace.info("socket not created:", url);
                return null;
            }

            var writer = function (msg) {
                if (ws)
                    ws.send(msg);

                else
                    trace.info("connection closed, failed to write", msg);
            }

            // ws implementation
            ws.onopen = function () {
                trace.log("socket created:", url);
                handler.onopen();
            };

            ws.onmessage = function (event) {
                try {
                    trace.log(event.data);
                    if (handler.onmsg)
                        handler.onmsg(event.data, writer);
                }
                catch (e) { }
            }

            ws.onclose = function () {
                ws = null;
                trace.error("socket connection closed");

                if (handler.onclose)
                    handler.onclose();

            };

            ws.onerror = function (event) {
                trace.error("socket connection error");
                if (handler.onerror)
                    handler.onerror();

            };

            trace.log("socket connected");
            return ws;
        } catch (e) {
            trace.exception(e);
        }

    }

    ///////////////////////////////////////////////////////////////////////////
    // Response parser
    function ParseResponse(response, handlers) {
        handlers = handlers || {};
        var values = {};

        // map actual key name
        var keymap = {};
        for (var key in handlers)
            keymap[key.toLowerCase()] = key;

        // parse response
        var items = (response || "").split("&");
        var length = items.length;
        for (var k = 0; k < length; ++k) {
            var item = items[k];
            var keyvalue = item.split("=");

            var key = keyvalue[0];
            var value = trim(decodeURIComponent(keyvalue[1]));

            // enforce name syntax
            var handler = handlers[key];
            if (undefined == handler) {
                var keylc = key.toLowerCase();
                var __key = keymap[keylc];
                if (undefined !== __key) {
                    handler = handlers[__key];
                    key = __key;
                }
            }

            if (handler)
                value = handler(value);

            values[key] = value;
        }

        return values;
    }

    ///////////////////////////////////////////////////////////////////////////
    function ParseResponseHeader(response, handlers) {
        handlers = handlers || {};
        var values = {};
        values.header = {};

        // map actual key name
        var keymap = {};
        for (var key in handlers)
            keymap[key.toLowerCase()] = key;

        function parameters(str) {
            var items = (str || "").split("&");
            var length = items.length;
            for (var k = 0; k < length; ++k) {
                var item = items[k];
                if (!item)
                    continue;

                var keyvalue = item.split("=");

                var key = keyvalue[0];
                if (!key)
                    continue;

                var value = trim(decodeURIComponent(keyvalue[1]));

                // enforce name syntax
                var handler = handlers[key];
                if (undefined == handler) {
                    var keylc = key.toLowerCase();
                    var __key = keymap[keylc];
                    if (undefined !== __key) {
                        handler = handlers[__key];
                        key = __key;
                    }
                }

                if (handler)
                    value = handler(value);

                values[key] = value;
            }
        }

        // msg body follows blank line
        var msg = "";
        var header = values.header;

        var lines = (response || "").split("\r\n");
        for (var k = 0; k < lines.length; ++k) {
            var item = lines[k];
            if (item == "") {
                msg = lines[k + 1] || "";
                parameters(msg);
                break;
            }

            if (0 == item.indexOf("GET") || 0 == item.indexOf("POST")) {
                var parts = item.split(/ +/);
                var url = parts[1];
                header.request_method = parts[0];
                header.url = url;

                var items = url.split("?");
                header.resource = items[0];
                header.parameters = items[1];

                // parse parameters
                parameters(items[1]);
            }

            else {
                var split = item.indexOf(":");
                var key = item.substring(0, split);
                var value = item.substring(split + 2);
                header[key] = value;
            }
        }

        return values;
    }

    ///////////////////////////////////////////////////////////////////////////
    function trim(value) {
        value = (value || "");
        return value.toString().replace(/^\s+|\s+$/g, "");
    }

    ///////////////////////////////////////////////////////////////////////////
    function num(value) {
        try {
            value = 1 * value;
        } catch (e) {
            value = 0;
        }

        return value;
    }

    ///////////////////////////////////////////////////////////////////////////
    function bool(value) {
        value = (value || "");
        return ("true" == value) ? true : false;
    }

    ///////////////////////////////////////////////////////////////////////////
    function comma_list(value) {
        return list(value || "", ",");
    }

    ///////////////////////////////////////////////////////////////////////////
    function list(value, split_text) {
        split_text = split_text || '|';
        value = (value || "");

        if (value == "")
            return [];

        var items = value.split(split_text);
        return items;
    }

    ///////////////////////////////////////////////////////////////////////////
    function decode_ccowstring(value) {

        return (value.toString()).replace(/\+/g, ' ').replace(/\|/g, '\n');
    }

    ///////////////////////////////////////////////////////////////////////////
    function isNullOrUndefined(value) {
        return (value === null || value === undefined || value === "");
    }

    /*
    <summary>
    This method creates a token number based on the current time. This is done only for first call.
    For subsequent calls this method returns the token by increments 'Token' value by 1.
    </summary>

    <return>
    <param name="Token">
    Returns token value created using current time or incremented from previous value
    </param>
    </return>
    */
    var Token = 0;      //global variable to store the token value
    function getNextToken() {

        if (0 == Token) {
            var token = new Date();
            Token = token.getTime();
        }

        return Token++;
    }

    ///////////////////////////////////////////////////////////////////////////
    // This method generates a 9 digit random number used as GUID.
    // GUID has the format 90a21791-4933-4427-964b-17206ab433de
    function getGUID() {

        return getRandomInt(0x10000000, 0x100000000).toString(16) + "-" +
        getRandomInt(0x1000, 0x10000).toString(16) + "-" +
        getRandomInt(0x1000, 0x10000).toString(16) + "-" +
        getRandomInt(0x1000, 0x10000).toString(16) + "-" +
        getRandomInt(0x100000000000, 0x1000000000000).toString(16);
    }

    ///////////////////////////////////////////////////////////////////////////
    // This method generates a 3 digit random number used to append Application name.
    function getRandomNumber() {
        return Math.floor(Math.random() * 9000) + 1000;
    }


    ////////////////////////////////////////////////////////////////////////////
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /*
    <summary>
    This method convert input value into boolean.
    </summary>
    <param name="name"> input variable name to be use while throwing error.</param>
    <param name="value"> input value which is to be convert in boolean.</param>
    <return> 
    return boolean value.
    </return>
    */
    function convertToBoolean(exception, value) {
        if (!isNullOrUndefined(value)) {
            if (typeof value == 'boolean')
                return value;
            if (typeof value === "string") {
                value = value.toLowerCase();
                if ("true" === value)
                    return true;
                else if ("false" === value)
                    return false;
                else {
                    throw exception;
                }
            }
            return (value) ? true : false;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    function DeferCallback(callback) {

        // function to handle actual callback
        return function () {
            var args = [];

            //get all arguments in an array
            for (var k = 0; k < arguments.length; ++k)
                args.push(arguments[k]);

            //define function to be called from timeout
            var fn = function () {
                try {
                    callback.apply(null, args);
                }
                catch (e) { }
            }

            setTimeout(fn, 0);
        };
    }

    ///////////////////////////////////////////////////////////////////////////
    // safecallback
    function SafeCallback() {
        var trace = Trace("SafeCallback");
        try {
            arguments.shift = [].shift;
            var callback = arguments.shift();

            trace.log.apply(null, arguments);
            callback.apply(null, arguments);
        }
        catch (e) {
            trace.error("exception in client callback:", e.message);

        }

        trace.leaving();
    }

    ///////////////////////////////////////////////////////////////////////////
    function Trace(target) {

        var _target = target || "";
        var enterstack = [];

        //This function format input arguments with blank space separators.
        function format() {
            arguments.join = [].join;
            return (_target + " " + arguments.join(' '));
        }

        var logfn = function () {
            Trace.log.log.apply(null, arguments);
        };

        logfn.setname = function (target) {
            _target = target;
        };

        logfn.log = function () {
            if (logLevel >= LOGLEVEL_FINEST)
                logger.log(format.apply(null, arguments));
        };

        logfn.info = function () {
            if (logLevel >= LOGLEVEL_FINEST)
                logger.info(format.apply(null, arguments));
        };

        logfn.warn = function () {
            if (logLevel >= LOGLEVEL_FINE)
                logger.warn(format.apply(null, arguments));
        };

        logfn.error = function () {
            logger.error(format.apply(null, arguments));
        };

        logfn.exception = function () {
            var args = ["Exception:"];
            for (var k = 0; k < arguments.length; ++k) {
                var arg = arguments[k];
                if (arg.description)
                    arg = arg.description;

                args.push(arg);
            }

            // log error, log stack trace
            logger.error(format.apply(null, arguments));
            logger.trace();

        };

        logfn.entering = function () {
            if (arguments.length) {
                enterstack.push(_target);

                arguments.join = [].join;
                _target = arguments.join(' ');
            }

            if (logLevel >= LOGLEVEL_FINEST)
                logger.log(format("Entering"));

        };

        logfn.leaving = function () {
            if (logLevel >= LOGLEVEL_FINEST)
                logger.log(format("Leaving"));

			if (enterstack.length > 0)
                _target = enterstack.pop();

        };

        if (target)
            logfn.entering();

        return logfn;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    Trace.defer = function (target) {
        var trace = Trace();
        trace.setname(target);

        return trace;
    }

    ///////////////////////////////////////////////////////////////////////////
    function stampdate(msg) {
        return (GetDate() + " " + msg);
    }

    ///////////////////////////////////////////////////////////////////////////
    function locatorLog(logMessage) {
        //create request URL
        var logUrl = LocatorUrl(false, "2116") +
                                "?interface=Admin" +
                                "&method=LogMessage" +
                                "&logger=.IContextor" +
                                "&logMessage=" + encodeURIComponent(logMessage) +
                                "&logLevel=Finest";

        HttpRequest("GET", logUrl);
    }

    ///////////////////////////////////////////////////////////////////////////
    var logger =
    {
        console_log: console,
        locator_log: locatorLog,

        log: function (msg) {
            if (logger.console_log)
                logger.console_log.log(stampdate(msg));

            if (logger.locator_log)
                logger.locator_log(msg);

        },

        info: function (msg) {
            if (logger.console_log)
                logger.console_log.info(stampdate(msg));

            if (logger.locator_log)
                logger.locator_log(msg);

        },

        warn: function (msg) {
            if (logger.console_log)
                logger.console_log.warn(stampdate(msg));

            if (logger.locator_log)
                logger.locator_log(msg);

        },

        error: function (msg) {
            if (logger.console_log)
                logger.console_log.error(stampdate(msg));

            if (logger.locator_log)
                logger.locator_log(msg);

        },

        trace: function (msg) {
            if (logger.console_log)
                logger.console_log.trace();

        }

    }

    ///////////////////////////////////////////////////////////////////////////
    //This function return date in (DD/MM/YYYY HH:MM:SS.MMS) format.
    function GetDate() {
        var date = new Date();

        function zero(value, decplaces) {
            decplaces = decplaces || 2;
            value = ((value > 0 && value < 10) ? "0" : "") + value;
            while (value.length < decplaces)
                value = "0" + value;

            return value;
        }

        return zero(date.getUTCDate()) + "/" + UTCDate.Month[date.getUTCMonth()] + "/" + date.getUTCFullYear() + " "
             + zero(date.getUTCHours()) + ":" + zero(date.getUTCMinutes()) + ":" + zero(date.getUTCSeconds()) + "." + zero(date.getUTCMilliseconds(), 3) + " GMT";
    }

    // RFC1123 date  ddd, dd mmm yyyy hh:mm:ss GMT
    function UTCDate(date) {
        date = date || new Date();

        // day of week, day, mo, year
        var utcdate_part =
        [
            UTCDate.DaysOfWeek[date.getUTCDay()] + ", ",
            date.getUTCDate(),
            UTCDate.Month[date.getUTCMonth()],
            date.getUTCFullYear()
        ];

        var utchour_part =
        [
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        ];

        var utcdate = utcdate_part.join(' ') + " " + utchour_part.join(':') + "GMT";
        return utcdate;
    }
    UTCDate.DaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    UTCDate.Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    ///////////////////////////////////////////////////////////////////////////
    // test hooks

    Caradigm.IAM.Test = {};
    Caradigm.IAM.Test.Export = function (localname) {
        try {
            var localvar = eval(localname);
            return localvar;
        } catch (e) {
            return null;
        }
    }

    Caradigm.IAM.Test.Define = function (localname, value) {
        try {
            var curr = eval(localname);
            if (!curr)
                return null;

            eval(localname + "=" + value.toString());
            var def = eval(localname);
            for (var member in value)
                def[member] = value[member];

            return def;
        } catch (e) {
            return null;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    Caradigm.IAM.Test.SetLogging = function (console_log, locator_log, level) {
        // enable, disable, re-route console log
        if (!console_log)
            logger.console_log = null;

        else if (true === console_log)
            logger.console_log = console;

        else
            logger.console_log = console_log;

        // enable, disable, re-route locator log
        if (!locator_log)
            logger.locator_log = null;

        else if (true === locator_log)
            logger.locator_log = locatorLog;

        else
            logger.locator_log = locator_log;

        // log level
        if (undefined !== level)
            logLevel = level;

    }

    ///////////////////////////////////////////////////////////////////////////
    function QueryLoggerLevel() {

        // recall level from last use
        var loggerLevel = GetSessionData("Caradigm_IAM_LogLevel");
        if ("" != loggerLevel)
            logLevel = num(loggerLevel);

        //create request URL
        var queryLoggerUrl = LocatorUrl(false, "2116") +
                                "?interface=AuxiliaryInformation" +
                                "&method=queryLogger" +
                                "&version=1.2";

        HttpRequest("GET", queryLoggerUrl, function (request) {
            var response = ParseResponse(request.responseText);
            switch (response.logLevel) {
                case "Protocol_err":
                    logLevel = LOGLEVEL_FINEST;
                    break;

                case "Finest":
                    logLevel = LOGLEVEL_FINEST;
                    break;

                default:
                    logLevel = LOGLEVEL_FINEST;
                    break;

            }

            SetSessionData("Caradigm_IAM_LogLevel", logLevel);
        });

    }

    ///////////////////////////////////////////////////////////////////////////
    /*
    <summary>
    Sets session cookie for the browser
    </summary>

    <param name="cname">Cookie name</param>

    <param name="cvalue">Value to be stored in the cookie</param>

    <return>
    None
    </return>
    */
    var SetSessionData = function (cname, cvalue) {

        try {
            sessionStorage.setItem(cname, cvalue);
        }
        catch (e) {
            e.message = "session storage not supported. Not supported on local file system or older browsers.";
            throw e;
        }
    }

    /*
    <summary>
    Gets session cookie for the browser
    </summary>

    <param name="cname">Cookie name</param>

    <return>
    Cookie value
    </return>
    */
    var GetSessionData = function (cname) {

        var value = sessionStorage.getItem(cname);
        return (value != "" && value != null) ? value : "";
    }

    /*
    <summary>
    Delete Cookie from browser
    </summary>

    <return>
    None
    </return>
    */
    var DeleteSessionData = function () {

        sessionStorage.removeItem("Caradigm_IAM_ParticipantCoupon");
        sessionStorage.removeItem("Caradigm_IAM_ContextCoupon");
        sessionStorage.removeItem("Caradigm_IAM_JoinName");
        sessionStorage.removeItem("Caradigm_IAM_persistPort");
        sessionStorage.removeItem("Caradigm_IAM_guid");
        sessionStorage.removeItem("Caradigm_IAM_CMUrl");
    }

    /*
    <summary>
    This function is a common function which accepts the request type and URL to contact server to get response.
    //This is an asynchronous method which also accepts callback to responds the results back to the caller.
    </summary>

    <param name="request">Request type is GET or POST.</param>

    <param name="requestURL">The URL to send the HTTP request</param>

    <param name="callback">
    Passed by the caller, this callback function will be called from onreadystatechange()
    </param>

    <return>
    None
    </return>
    */
    function HttpRequest(request, requestUrl, callback) {

        if (4 == arguments.length)
            return HttpRequestTimeout.apply(this, arguments);

        else
            return HttpRequestTimeout(request, requestUrl, Caradigm.IAM.Config.RequestTimeout, callback)

    }

    function HttpRequestTimeout(request, requestUrl, timeout, callback) {

        try {
            var aSync = true;
            var req = createXMLHTTPObject();
            if (!req) return;

            //Split requestURL into URL and Parameter.
            var arr_requrl = requestUrl.split("?");
            var url = arr_requrl[0];
            var param = "";

            //add "?" if arr_requrl has more than one parameter.
            for (var segment = 1; segment < arr_requrl.length; segment++) {
                param += arr_requrl[segment];
                if (segment != arr_requrl.length - 1) {
                    param += "?";
                }
            }

            // set request method
            if (request == "GET") {
                req.open(request, url + "?" + param, aSync);
            } else {
                req.open(request, url, aSync);
            }

            // timeout
            if (timeout)
                req.timeout = timeout;

            // execute request
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.ontimeout = function () {
                // if no callback, ignore rest
                if (!callback)
                    return;

                // fix status
                req = cloneReq(req, Caradigm.IAM.HTTPStatusCode.RequestTimeout);
                callback(req);
            }

            req.onreadystatechange = function () {
                if (req.readyState != Caradigm.IAM.Constant.RequestReady) return;

                // if no callback, ignore rest
                if (!callback)
                    return;

                // fix status if connection denied
                if (0 == req.status)
                    req = cloneReq(req, Caradigm.IAM.HTTPStatusCode.ConnectionDenied);

                callback(req);
            }

            if (request == "GET")
                req.send(null);
            else
                req.send(param);

        } catch (e) {
            e.Message = "Misformed URL, probably Locator issue.";
            throw e;
        }
    }

    //Description: Array of HTTP objects
    var XMLHttpFactories =
   [
      function () { return new XMLHttpRequest() },
      function () { return new ActiveXObject("Msxml2.XMLHTTP") },
      function () { return new ActiveXObject("Msxml3.XMLHTTP") },
      function () { return new ActiveXObject("Microsoft.XMLHTTP") }
   ];

    /*
    <summary>
    Creates XMLHHTP obejct from the available HTTP objects
    </summary>

    <parameter>
    None
    </parameter>

    <return>
    <param name="xmlHTTP">
    XMLHTTP object
    </param>
    </return>
    */
    function createXMLHTTPObject() {
        var xmlhttp = false;
        for (var i = 0; i < XMLHttpFactories.length; i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
            }
            catch (e) {
                continue;
            }
            break;
        }

        return xmlhttp;
    }

    ///////////////////////////////////////////////////////////////////////////
    function getHTTPStatusCode(status) {

        var reverseLookup = Caradigm.IAM.HTTPStatusCode.ReverseLookup;
        if (!reverseLookup) {
            reverseLookup = {};
            for (var key in Caradigm.IAM.HTTPStatusCode) {
                var entry = Caradigm.IAM.HTTPStatusCode[key];
                reverseLookup[entry.number] = entry;
            }

            Caradigm.IAM.HTTPStatusCode.ReverseLookup = reverseLookup;
        }

        var statuscode = reverseLookup[status];
        if (!statuscode) {
            Trace().warn("unexpected http return:", status);
            statuscode = StatusCode(status, "");
        }

        return statuscode;
    }

    ///////////////////////////////////////////////////////////////////////////
    // logResponse
    function logResponse(request) {
        try {
            var status = request.status;
            if (Caradigm.IAM.HTTPResponse.Success == status)
                Trace().log("HTTP status:", status, request.responseText);

            else
                Trace().error("HTTP status:", status, status.message);

            return status;
        }
        catch (e) {
            Trace().error("HTTP status: invalid status object");
            return Caradigm.IAM.HTTPResponse.ConnectionDenied;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // clone request
    function cloneReq(req, optStatus) {

        var clone = {};
        for (var key in req)
            clone[key] = req[key];

        if (optStatus === undefined)
            optStatus = Caradigm.IAM.HTTPResponse.ConnectionDenied;

        clone.status = optStatus;
        return clone;
    }

    ///////////////////////////////////////////////////////////////////////////
    function dynamicUrl(protocol, default_url, guid) {
        var href = window.location.href;
        if (!window.location.hostname)
            href = default_url;

        if( protocol )
            href = href.replace(/^http:\/\//i, protocol);

        // Since the cpid in this case is part of the contextParticipant string and not a separate CPID argument, the "&" needs to be encoded
        // otherwise the vault will see it as a separate CPID parameter and not part of the contextParticipant string.  If not encoded
        // join would be for participant that cannot be reached and if it is a webapp will probably return a page error (e.g 302 Please Wait) instead of an unreachable.
        // The page error occurs because without CPID in the string, locator will not find persistent connection and will send directly to webServer probably getting webpage error.
        // If unreachable NOT returned by locator, app would stay as participant but not allow any context changes to complete until it gets manually removed at the vault.            
        if (href.indexOf("?") >= 0) href = href + "%26cpid=" + guid;
        else href = href + "?cpid=" + guid;

        href = href.replace("#", "%2523");
        return href;
    }

    ///////////////////////////////////////////////////////////////////////////
    // StatusCode
    var StatusCode = function (code, message, success) {
        if (!(this instanceof StatusCode))
            return new StatusCode(code, message, success);

        this.message = message || '';
        this.success = (success) ? true : false;

        if (code instanceof StatusCode)
            this.number = code.number;

        else
            this.number = (undefined !== code) ? code : -1;

    }

    StatusCode.prototype.toString = function (base) {
        if (base)
            return this.number.toString(base);

        if (this.number < 999)
            return '' + this.number;

        else
            return '0x' + this.number.toString(16).toUpperCase();
    }

    StatusCode.prototype.isError = function () {
        return (!this.success);
    }

    StatusCode.prototype.isClass = function (classtype) {
        try {
            return (this.number == classtype.number);
        } catch (e) {
            return false;
        }
    }

    StatusCode.prototype.isStatusCode = function () {
        return true;
    }

    ///////////////////////////////////////////////////////////////////////////
    function StatusCodeFromException(ex) {
        if (!ex.isStatusCode)
            ex = StatusCode(Caradigm.IAM.InternalError, ex.message);

        return ex;
    }

    ///////////////////////////////////////////////////////////////////////////
    function LocatorUrl(socket_protocol, requirePort) {

        // if https
        var ssl = (-1 != window.location.protocol.indexOf("https"));
        var protocol = "";

        if (socket_protocol)
            protocol = (ssl) ? "wss://" : "ws://";

        else
            protocol = (ssl) ? "https://" : "http://";

        var persistPort;
        if (!requirePort)
            persistPort = GetSessionData("Caradigm_IAM_persistPort") || "2116";
        else
            persistPort = requirePort;

        var domain = (-1 == window.location.protocol.indexOf("https"))
                    ? "127.0.0.1:" + persistPort : "127.0.0.1:2117";

        return protocol + domain + "/";
    }

    ///////////////////////////////////////////////////////////////////////////
    function initialize() {
        try {
            // init status codes
            statuscodes();

            // set/query log level
            QueryLoggerLevel();

            // re-establish web socket connection
            var guid = GetSessionData("Caradigm_IAM_guid");
            var persistPort = GetSessionData("Caradigm_IAM_persistPort");

            if (guid && persistPort)
                SurveySocket(persistPort, guid);

        }
        catch (e) { }

    }

    ///////////////////////////////////////////////////////////////////////////
    // make status code public
    Caradigm.IAM.StatusCode = StatusCode;
    initialize();

    // finalize
    var root = window || this;
    root.Caradigm = Caradigm;

})(window);