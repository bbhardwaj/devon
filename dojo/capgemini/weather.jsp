<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%
	//JDBC calls

	Map<String,String> map = new HashMap<String,String>();
	map.put("Delhi","Very Very hot");
	map.put("Pune","Very Cool");
	map.put("Mumbai","Very hot");
	map.put("Banglore","Very Very cool");

	String city = request.getParameter("city");

	response.setHeader("Content-Type","text/plain");
	//out.println("Banglore weather is COOL!!!");
	
	out.println(city + " is "+ map.get(city));
%>