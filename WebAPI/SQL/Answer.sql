USE [research]
GO

/****** Object:  Table [jeremy].[Answer]    Script Date: 1/30/2016 1:23:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [jeremy].[Answer](
	[AnswerId] [int] IDENTITY(1,1) NOT NULL,
	[TimeStamp] [datetime] NOT NULL,
	[IpAddress] [varchar](15) NOT NULL,
	[AnswerText] [nvarchar](50) NOT NULL,
	[Subject] [int] NOT NULL,
 CONSTRAINT [PK_Answer] PRIMARY KEY CLUSTERED 
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
