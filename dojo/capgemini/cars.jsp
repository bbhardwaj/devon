<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="com.google.gson.*" %>

<%
	List<Car> cars = new ArrayList<Car>();
	Class.forName("com.mysql.jdbc.Driver");
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/vtas","root","root");
	Statement stm = con.createStatement();
	ResultSet rs= stm.executeQuery("select * from car_details");
	while(rs.next()){
		Car car = new Car(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getDouble(4),rs.getString(5));
		cars.add(car);
	}
	
	Gson gson = new GsonBuilder().create();
	String data = gson.toJson(cars);
	
	response.setHeader("Content-Type","application/json");
	out.println(data);
	con.close();
	
%>
<%! 
	public class Car{
		int vin;
		String name;
		String make;
		double price;
		String color;
	
		public Car(){
		}

		public Car(int vin,String name,String make,double price,String color){
			this.vin = vin;
			this.name = name;
			this.make = make;
			this.price = price;
			this.color = color;
		}
	
		public int getVin(){
			return this.vin;
		}		
		public String getName(){
			return this.name;
		}		
		public String getMake(){
			return this.make;
		}		
		public double getPrice(){
			return this.price;
		}		
		public String getColor(){
			return this.color;
		}		
		
	}
%>