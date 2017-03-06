<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
 
<html>
<head>
<title>SELECT Operation</title>
</head>
<body>

  <%
    Class.forName("org.postgresql.Driver");
    Connection conn =DriverManager.getConnection("jdbc:sqlserver://fundmyfuture.database.windows.net:1433","fmf", "blk2017!");
    Statement st=conn.createStatement();

    ResultSet rs;
    rs = st.executeQuery("SELECT *;");


</body>
</html>


    
