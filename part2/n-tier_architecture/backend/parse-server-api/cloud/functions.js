Parse.Cloud.define("hello", (req) => {
    req.log.info(req);
    return "Hi from Parse Server";
  });
  
  Parse.Cloud.define("OnlineAgentByAgentCode", async (request) => {
    let AgentCode = request.params.AgentCode;
    let StatusCode = request.params.StatusCode;
  
    let returnCode = 0;
    //------------------
  
    const query = new Parse.Query("OnlineAgentLists"); // select * from OnlineAgentLists
  
    query.equalTo("AgentCode", AgentCode); // where AgentCode = 'AgentCode'
  
  
    let results;
  
    try {
      results = await query.first();
  
      if (results == undefined) {
        returnCode = "9";
      } else {
        returnCode = results.get("AgentStatus");
      }
  
      return returnCode;
    } catch (error) {
      throw error.message;
    }
  });
  
  