<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>


<html>
<head> <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <title>ticket stuff</title></head>
<body bgcolor="white">

    <div id="container">
        <ul id="nav">
            <li style="color:#Fa9a0a">TicketAssignment.com</li>
            <li><a href="sampleJSP.html">Search</a></li>
            <li><a href="create_event.html">Create Event</a></li>
        </ul>
    </div>

<%
    Class.forName("org.postgresql.Driver");
    Connection conn = DriverManager.getConnection("jdbc:sqlserver://fundmyfuture.database.windows.net:1433","fmf", "BLK2017");
    Statement st=conn.createStatement();
    jdbc:sqlserver://fundmyfuture.database.windows.net:1433;database=FundMyFuture;user=fmf@fundmyfuture;password=BLK2017;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.

    boolean check = true;


    for(String val : tokens ) {
    ResultSet rs;
    rs = st.executeQuery("");
        
    if(rs.next()){
        %>These events match your criteria!<br> Click to view more info!<br><br><%
%>
            <a href="event_page.jsp?event=<%=rs.getString("event_id")%>"><tr><td><%=rs.getString("event_name")%> </td></tr></a><br>
<%
    }
    else{
    %><br><br><br><br><br><br><br><br>Sorry, it appears there are no events that match your query.<%
}

        while(rs.next()){
%>
            <a href="event_page.jsp?event=<%=rs.getString("event_id")%>"><tr><td><%=rs.getString("event_name")%> </td></tr></a><br>
<%
        }

}
%>

</body>
</html>


    
