let http = require("http");
let url = require("url");
let port=9999;
// create array Task array
let loginInfo = `
    <form action="/login" method="get">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="Sign In!"/>
        <input type="reset" value="reset"/>
    </form>
`

let server = http.createServer((req,res)=> {
    //console.log(req.url)
    if(req.url != "/favicon.ico"){

        if(req.url=="/login"){
            let data = url.parse(urlDetails,true).query;
            if(data.user=="Ajay" && data.pass=="Kumar")
            {
                res.write("Successfully Login!");
            }else {
                res.write("Failure try once again");
            }
            res.end(loginInfo);

             // take the value from url
            // convert to object
            // store records in object using push method
            //converet to string
            // store using fs module.
        }else if(req.url=="/delete"){
                // read from file
                // convert to json
                // check value using iterator or loop
                // delete using array method's
                // store in file using fs module.
                //if task id not available display error message.
        }else if(req.url=="/display"){
                // read from file
                // convert to json
                //iterator loop
                // create tableData variable using backticks
                /*
                    <table>
                    <tr>
                            <td>${variableName}</td>
                    </tr>
                    </table>
                    res.end(tableDatavariable);
                */
        }
    }


});

server.listen(port,()=>console.log(`Server running on port number ${port}`));
