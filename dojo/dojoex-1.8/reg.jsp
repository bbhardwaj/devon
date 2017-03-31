<%
	String name=request.getParameter("name");
	String dob=request.getParameter("dob");
	String tob=request.getParameter("tob");
	String weight=request.getParameter("weight");
	String gender=request.getParameter("gender");

	//50 JDBC stuff
	
%>
<b>User is registered as </b><br>
<b>Name : </b><%= name %><br>
<b>DOB : </b><%= dob %><br>
<b>TOB : </b><%= tob %><br>
<b>Weight : </b><%= weight %><br>
<b>Gender : </b><%= gender %><br>