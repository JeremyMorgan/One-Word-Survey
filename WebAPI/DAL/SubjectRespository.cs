using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Dapper;
using Research.API.Models;

namespace Research.API.DAL
{
	public class SubjectRespository
	{
		private IDbConnection _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);


		public List<Subject> GetSubjectsList()
		{
			return this._db.Query<Subject>("SELECT TOP 1000 [SubjectId],[SubjectName],[SubjectText],[SubjectOgImage],[SubjectPageImage],[SubjectUrlSlug] FROM [Subject]").ToList();
		}

		public Subject GetSubject(int id)
		{
			return this._db.Query<Subject>("SELECT * FROM Subject WHERE SubjectID = @SubjectID", new { SubjectID = id }).SingleOrDefault();
		}

	}
}