// class Employee {
//     #salary;  // Private property

//     constructor(name, age, salary) {
//       this.name = name;
//       this.age = age;
//       this.#salary = salary;
//     }

//     getName() {
//       return this.name;
//     }

//     getAge() {
//       return this.age;
//     }

//     setSalary(newSalary) {
//       if (newSalary > 0) {
//         this.#salary = newSalary;
//         return true;
//       }
//       return false;
//     }

//     getSalary() {
//       return this.#salary;
//     }
//   }

//   const employee1 = new Employee('John Doe', 30, 50000);
//   console.log(employee1.getName());
//   console.log(employee1.getAge());
//   console.log(employee1.setSalary(55000));
//   console.log(employee1.getSalary());

function printWeekdaysInOctober2023() {
  const startDate = new Date(2023, 9, 1); // Month is 0-indexed
  const endDate = new Date(2023, 9, 16);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formattedDates = [];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Exclude Sunday (0) and Saturday (6)
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "short" });
      const formattedDate = `${day}${
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th"
      } ${month}`;
      formattedDates.push(formattedDate);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return formattedDates;
}

const octoberWeekdays = printWeekdaysInOctober2023();
octoberWeekdays.forEach((date) => console.log(date));
