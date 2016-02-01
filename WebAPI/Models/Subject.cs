using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Research.API.Models
{
	public class Subject
	{
		public int SubjectId { get; set; }
		public string SubjectName { get; set; }
		public string SubjectText { get; set; }
		public string SubjectOgImage { get; set; }
		public string SubjectPageImage { get; set; }
		public string SubjectUrlSlug { get; set; }

	}
}