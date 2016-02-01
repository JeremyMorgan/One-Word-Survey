using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO.Pipes;
using System.Linq;
using System.Web;
using Research.API.Models;
using Dapper;
using Research.API.Helpers;

namespace Research.API.DAL
{
	public class AnswerRespository
	{
		private IDbConnection _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);


		public List<Answer> GetAnswers(int amount, string sort)
		{
			return this._db.Query<Answer>("SELECT TOP " + amount + " [AnswerId],[TimeStamp],[IpAddress],[AnswerText],[Subject] FROM [research].[jeremy].[Answer] ORDER BY [TimeStamp] " + sort).ToList();
		}

		public AnswerResult SubmitAnswer(Answer ourAnswer)
		{
			ourAnswer.IpAddress = IPNetworking.GetIp4Address();

			int rowsAffected = this._db.Execute(@"INSERT Answer(IpAddress,TimeStamp,AnswerText,Subject) values (@IpAddress, GETDATE(), @AnswerText, @Subject)", 
				new { IpAddress = ourAnswer.IpAddress, AnswerText = ourAnswer.AnswerText, Subject = ourAnswer.SubjectId});

			var returnResult = new AnswerResult();

			if (rowsAffected > 0)
			{
				returnResult.Status = 1;
				returnResult.StatusText = "Inserted " + rowsAffected + " rows";
			}
			else
			{
				returnResult.Status = 0;
				returnResult.StatusText = "Nothing inserted";
			}

			return returnResult;
		}
	}
}