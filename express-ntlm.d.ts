// Type definitions for express-ntlm
// Project: https://github.com/einfallstoll/express-ntlm
// Definitions by: Prince Cheruvathur <https://github.com/prncher/express-ntlm-dt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "express-ntlm" {
    import * as express from "express";

    /*
    * main function for the ntlm implementation.
    */
    function n(options?: {
        extended?: boolean;
    }): express.RequestHandler;

    namespace n {
        // ntlm data.
        interface UserData {
            DomainName: string,
            UserName: string,
            Workstation: string
        }

        // ntlm is augmented with the express Request.
        interface Request extends express.Request { ntlm: UserData }
    }

    export = n;
}
