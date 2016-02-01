using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Research.API.Models
{
	public class Answer
	{
		public int AnswerId { get; set; }
		public int SubjectId { get; set; }
		public DateTime TimeStamp { get; set; }
		public string IpAddress { get; set; }
		public string AnswerText { get; set; }

	}
}