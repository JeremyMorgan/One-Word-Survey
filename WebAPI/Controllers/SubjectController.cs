using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Research.API.DAL;
using Research.API.Models;

namespace Research.API.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class SubjectController : ApiController
    {
		private SubjectRespository subjects = new SubjectRespository();

        // GET: api/Subject
        public List<Subject> Get()
        {
	        return subjects.GetSubjectsList();
        }

        // GET: api/Subject/5
        public Subject Get(int id)
        {
	        return subjects.GetSubject(id);
        }
    }
}
