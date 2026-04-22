export const REPORTS = [
  { id: 1, title: "Forest Fire Near Okhla", location: "New Delhi", lat: 28.55, lng: 77.27, urgency: "high", status: "active", volunteers: 4, type: "Fire", time: "2 min ago" },
  { id: 2, title: "Flood Relief Needed", location: "Yamuna Bank", lat: 28.63, lng: 77.28, urgency: "high", status: "active", volunteers: 2, type: "Flood", time: "8 min ago" },
  { id: 3, title: "Animal Rescue Required", location: "Saket", lat: 28.52, lng: 77.21, urgency: "medium", status: "in-progress", volunteers: 3, type: "Animal", time: "15 min ago" },
  { id: 4, title: "Air Quality Alert", location: "Gurgaon", lat: 28.46, lng: 77.03, urgency: "low", status: "resolved", volunteers: 6, type: "Air", time: "1 hr ago" },
  { id: 5, title: "Water Contamination", location: "Noida", lat: 28.57, lng: 77.32, urgency: "medium", status: "active", volunteers: 1, type: "Water", time: "22 min ago" },
  { id: 6, title: "Illegal Dumping Site", location: "Faridabad", lat: 28.41, lng: 77.31, urgency: "low", status: "in-progress", volunteers: 2, type: "Waste", time: "3 hr ago" }
];

export const VOLUNTEERS = [
  { id: 1, name: "Priya Sharma", skills: ["First Aid", "Rescue"], status: "available", tasks: 3, location: "Connaught Place", joined: "Jan 2024" },
  { id: 2, name: "Arjun Mehta", skills: ["Fire Safety", "Logistics"], status: "on-task", tasks: 7, location: "Lajpat Nagar", joined: "Mar 2023" },
  { id: 3, name: "Sneha Patel", skills: ["Medical", "Communication"], status: "available", tasks: 5, location: "Dwarka", joined: "Jun 2024" },
  { id: 4, name: "Rahul Verma", skills: ["Technical", "Data Entry"], status: "offline", tasks: 2, location: "Noida", joined: "Nov 2023" },
  { id: 5, name: "Kavya Nair", skills: ["Rescue", "Logistics"], status: "available", tasks: 9, location: "Rohini", joined: "Feb 2024" },
  { id: 6, name: "Dev Kapoor", skills: ["First Aid", "Fire Safety"], status: "on-task", tasks: 4, location: "Vasant Kunj", joined: "Aug 2023" }
];

export const ACTIVITIES = [
  { id: 1, text: "New report: Forest Fire Near Okhla", time: "just now", color: "#dc2626" },
  { id: 2, text: "Priya Sharma assigned to Flood Relief", time: "3 min", color: "#2563eb" },
  { id: 3, text: "Task #4 resolved by Dev Kapoor", time: "12 min", color: "#16a34a" },
  { id: 4, text: "Water Contamination survey submitted", time: "22 min", color: "#d97706" },
  { id: 5, text: "3 volunteers checked in at Yamuna Bank", time: "35 min", color: "#7c3aed" },
  { id: 6, text: "AI matched: Arjun Mehta → Fire task", time: "1 hr", color: "#0891b2" }
];