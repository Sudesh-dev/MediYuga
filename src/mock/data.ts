export type Doctor = {
  id: string
  name: string
  specialty: string
  qualification: string
  trust: number
  billing: number
  ethics: number
  feedback: number
  reviews: number
  clinic: string
  distanceKm: number
  queue: number
  waitMins: number
  fee: number
  affordability: 1 | 2 | 3 | 4
  photo: string
}

export const doctors: Doctor[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `doc-${i+1}`,
  name: [
    'Dr. Aditi Sharma', 'Dr. Rajesh Kumar', 'Dr. Neha Verma', 'Dr. Arjun Iyer', 'Dr. Priya Nair', 'Dr. Karan Mehta',
    'Dr. Simran Kaur', 'Dr. Vivek Singh', 'Dr. Ritu Gupta', 'Dr. Aman Chauhan', 'Dr. Meera Joshi', 'Dr. Rohit Rao'
  ][i],
  specialty: ['Cardiologist','Dermatologist','Pediatrician','Orthopedic','ENT','Gynecologist','Neurologist','Ophthalmologist','Dentist','Psychiatrist','General Physician','Gastroenterologist'][i],
  qualification: ['MD','MS','MBBS, MD','MBBS, MS'][i % 4],
  trust: 60 + Math.floor(Math.random()*39),
  billing: 60 + Math.floor(Math.random()*39),
  ethics: 60 + Math.floor(Math.random()*39),
  feedback: 60 + Math.floor(Math.random()*39),
  reviews: 20 + Math.floor(Math.random()*200),
  clinic: ['CarePlus Clinic','City Health Center','Sunrise Hospital','Wellness Point'][i % 4],
  distanceKm: 1 + Math.floor(Math.random()*15),
  queue: Math.floor(Math.random()*20),
  waitMins: 5 + Math.floor(Math.random()*60),
  fee: 300 + Math.floor(Math.random()*1700),
  affordability: (1 + (i % 4)) as 1|2|3|4,
  photo: `https://i.pravatar.cc/150?img=${i+3}`
}))

export const notifications = Array.from({ length: 9 }).map((_, i) => ({
  id: `n-${i+1}`,
  type: ['reminder','queue','general','cancel'][i % 4],
  title: ['Appointment Reminder','Queue Update','Platform Update','Appointment Cancelled'][i % 4],
  message: 'This is a sample notification to demonstrate updates.',
  time: `${1 + i}h ago`,
  read: i % 3 === 0
}))

export const patient = {
  upcoming: Array.from({ length: 6 }).map((_, i) => ({
    id: `up-${i+1}`,
    date: `2025-10-${10 + i}`,
    time: `${10 + (i%5)}:30 AM`,
    doctor: doctors[i].name,
    clinic: doctors[i].clinic,
    type: ['Consultation','Follow-up'][i % 2]
  })),
  prescriptions: Array.from({ length: 12 }).map((_, i) => ({
    id: `rx-${i+1}`,
    date: `2025-0${1 + (i%9)}-12`,
    doctor: doctors[(i+1)%doctors.length].name,
    diagnosis: ['Hypertension','Allergy','Back Pain','Acidity'][i % 4],
    meds: ['Med A 5mg','Med B 10mg','Med C PRN']
  })),
  billings: Array.from({ length: 10 }).map((_, i) => ({
    id: `bill-${i+1}`,
    date: `2025-0${1 + (i%9)}-05`,
    doctor: doctors[(i+2)%doctors.length].name,
    amount: 300 + Math.floor(Math.random()*1700),
    method: ['UPI','Card','Cash'][i % 3]
  }))
}
