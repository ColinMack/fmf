<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
 
<html>
<head>
<title>SELECT Operation</title>
</head>
<body>

  <%
    Connection conn = DriverManager.getConnection("jdbc:sqlserver://fundmyfuture.database.windows.net:1433","fmf", "blk2017!");
    Statement st=conn.createStatement();
    st.executeUpdate("CREATE TABLE TEST (id INTEGER NOT NULL);");
    System.out.println("success");
   %>


</body>
</html>


    
