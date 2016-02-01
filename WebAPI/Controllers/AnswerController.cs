using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Research.API.DAL;
using Research.API.Models;

namespace Research.API.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class AnswerController : ApiController
    {
		private AnswerRespository answers = new AnswerRespository();

        // GET: api/Answer
        public List<Answer> Get()
        {
			// grab last 10
	        return Get(10, "DESC");
        }

        // GET: api/Answer/5
        public List<Answer> Get(int amount, string sort)
        {
			
			var result = answers.GetAnswers(amount,sort);
			return result;
		}

        // POST: api/Answer
        public AnswerResult Post([FromBody] Answer ourAnswer)
        {
	        return answers.SubmitAnswer(ourAnswer);
        }
    }
}
