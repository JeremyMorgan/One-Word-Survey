USE [research]
GO

/****** Object:  Table [jeremy].[Subject]    Script Date: 1/30/2016 7:48:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [jeremy].[Subject](
	[SubjectId] [int] IDENTITY(1,1) NOT NULL,
	[SubjectName] [nvarchar](50) NOT NULL,
	[SubjectText] [text] NULL,
	[SubjectOgImage] [nvarchar](50) NULL,
	[SubjectPageImage] [nvarchar](50) NULL,
	[SubjectUrlSlug] [nvarchar](50) NULL,
 CONSTRAINT [PK_Subject] PRIMARY KEY CLUSTERED 
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


