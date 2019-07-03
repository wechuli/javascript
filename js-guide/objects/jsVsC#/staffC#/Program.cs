using System;

namespace staffC_
{
    class Program
    {
        static void Main(string[] args)
        {

            var jim = new Employee();
            Console.WriteLine(jim.dept);
            var sally = new Manager();
            var mark = new WorkerBee();
            var fred = new SalesPerson();
            Engineer paul = new Engineer();
            Console.WriteLine(paul.dept);

        }
    }
}
