using System;
namespace staffC_
{
    public class Employee
    {

        public string name;
        public string dept;

        public Employee(string name, string dept)
        {
            this.name = name;
            this.dept = dept;

        }

        public Employee()
        {
            this.name = "";
            this.dept = "general";
        }



    }

    public class Manager : Employee
    {
        public Employee[] reports = new Employee[10];
    }

    public class WorkerBee : Employee
    {
        public string[] projects = new string[10];
    }

    public class SalesPerson : WorkerBee
    {
        public string dept = "sales";
        public double quota = 100.0;
    }
    public class Engineer : WorkerBee
    {
        public string dept = "engineering";
        public string machine = "";
    }
}