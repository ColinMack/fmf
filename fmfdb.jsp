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
    String query = request.getParameter("query");
    String[] tokens = query.split(",", -1);


    //List<String> queryList = Arrays.asList(query.split(","));

    Class.forName("org.postgresql.Driver");
    Connection conn = DriverManager.getConnection("jdbc:sqlserver://fundmyfuture.database.windows.net:1433","fmf", "BLK2017");
    Statement st=conn.createStatement();
    jdbc:sqlserver://fundmyfuture.database.windows.net:1433;database=FundMyFuture;user=fmf@fundmyfuture;password=BLK2017;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.

    boolean check = true;


    for(String val : tokens ) {
    ResultSet rs;
        if(val.matches("\\d{2}-\\d{2}-\\d{4}")){
            rs = st.executeQuery("SELECT distinct e.event_name, e.event_id FROM event e, performance p, venue v WHERE p.performance_date=to_date('"+ val +"');");
    }
        else if(val.matches(".*\\d+.*")){
            float f = Float.parseFloat(val);
            rs = st.executeQuery("SELECT distinct e.event_name, e.event_id FROM event e, performance p, venue v WHERE (p.maximum_ticket_price > "+ f +" AND p.minimum_ticket_price < "+ f +" AND p.event_id=e.event_id);");
    }
        else{
            rs = st.executeQuery("SELECT distinct e.event_name, e.event_id FROM event e, performance p, venue v WHERE (upper(e.event_name) LIKE upper('%"+ val +"%')) OR (upper(v.venue_name) LIKE upper('%"+ val +"%') AND e.event_id=p.event_id AND p.venue_id=v.venue_id);");
    }

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


    
