using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Net;

namespace Research.API.Helpers
{

	public class IPNetworking
	{
		public static string GetIp4Address()
		{
			string localIp = "?";

			IPHostEntry host = Dns.GetHostEntry(Dns.GetHostName());

			foreach (IPAddress ip in host.AddressList)
			{
				if (ip.AddressFamily.ToString() == "InterNetwork")
				{
					localIp = ip.ToString();
				}
			}

			return localIp;
		}
	}
}