import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(null);

const DEFAULT_COURSES = [
  {
    id: 1,
    title: 'Nazra Quran',
    titleUrdu: 'ناظرہ قرآن',
    description: 'Perfect for beginners. Learn to read the Quran correctly using Noorani Qaida, Rehmani Qaida, and Baghdadi Qaida with proper pronunciation.',
    icon: '📖',
    badge: 'Beginner Friendly',
    duration: '3-6 Months',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Quran Memorization (Hifz)',
    titleUrdu: 'حفظ القرآن',
    description: 'Memorize the entire Holy Quran under the guidance of qualified Huffaz. A blessed journey to earn a shining crown on the Day of Judgment.',
    icon: '🌟',
    badge: 'Most Popular',
    duration: '2-4 Years',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Tajweed Course',
    titleUrdu: 'تجوید القرآن',
    description: 'Master the rules of Tajweed for perfect Quranic recitation. Learn proper pronunciation, articulation points, and beautify your recitation.',
    icon: '🎵',
    badge: 'Essential',
    duration: '4-8 Months',
    level: 'All Levels',
  },
  {
    id: 4,
    title: 'Tafseer Quran',
    titleUrdu: 'تفسیر قرآن',
    description: 'Understand the deep meaning and interpretation of Quranic verses. Learn historical context, Arabic linguistics, and divine wisdom of the Quran.',
    icon: '📚',
    badge: 'Advanced',
    duration: '1-2 Years',
    level: 'Advanced',
  },
  {
    id: 5,
    title: 'Arabic Language Course',
    titleUrdu: 'عربی زبان کورس',
    description: 'Learn spoken and written Arabic to understand the Quran and Hadith directly. Includes grammar (Sarf & Nahw) and conversational Arabic.',
    icon: '🌍',
    badge: '6 Month Special',
    duration: '6 Months',
    level: 'All Levels',
  },
  {
    id: 6,
    title: 'English Language Course',
    titleUrdu: 'انگلش زبان کورس',
    description: 'Improve your English communication skills with our structured course. Speaking, writing, reading, and comprehension for students of all ages.',
    icon: '✍️',
    badge: 'Trending',
    duration: '3-6 Months',
    level: 'All Levels',
  },
  {
    id: 7,
    title: 'Quran Ijazah Course',
    titleUrdu: 'اجازہ القرآن',
    description: 'Earn an authentic Ijazah certificate with connected chain (Sanad) to the Prophet ﷺ. A prestigious certification for advanced Quran reciters.',
    icon: '🏆',
    badge: 'Certification',
    duration: '6-12 Months',
    level: 'Advanced',
  },
  {
    id: 8,
    title: 'Islamic Studies & Sharia',
    titleUrdu: 'اسلامی تعلیم',
    description: 'Comprehensive Islamic education covering Fiqh, Aqeedah, Hadith, Seerah (Prophet\'s biography), and practical Islamic jurisprudence.',
    icon: '🕌',
    badge: 'Comprehensive',
    duration: 'Ongoing',
    level: 'All Levels',
  },
];

const DEFAULT_TEACHERS = [
  {
    id: 1,
    name: 'Dr. Mufti Hafiz Ali Hassan Fridi',
    title: 'Founder & Head Teacher',
    specialization: 'Hifz, Tajweed, Tafseer, Fiqh',
    experience: '20+ Years',
    students: '500+',
    description: 'A distinguished Islamic scholar and Hafiz-e-Quran with PhD in Islamic Studies. Founder of Al-Frid Online Qur\'an Institution with 20+ years of teaching experience.',
    image: '/dr-fridi.jpg',
  },
  {
    id: 2,
    name: 'Ustadh Ahmad Bilal',
    title: 'Quran Memorization Specialist',
    specialization: 'Hifz ul Quran, Tajweed',
    experience: '12+ Years',
    students: '300+',
    description: 'A certified Hafiz and Tajweed expert who has helped hundreds of students memorize the entire Quran. Known for his patient and effective teaching methodology.',
    image: '/teacher-default.png',
  },
  {
    id: 3,
    name: 'Sister Maryam Fatima',
    title: 'Female Quran Teacher',
    specialization: 'Nazra, Tajweed, Arabic',
    experience: '8+ Years',
    students: '200+',
    description: 'A qualified female Quran teacher specializing in teaching sisters and children. Expert in Noorani Qaida, Tajweed rules, and Arabic language for beginners.',
    image: '/teacher-default.png',
  },
];

const DEFAULT_FEE_STRUCTURE = {
  currency: 'PKR',
  plans: [
    {
      id: 1,
      name: 'Basic',
      icon: '🌱',
      price: 2500,
      period: 'month',
      classesPerWeek: 3,
      classDuration: '30 mins',
      popular: false,
      features: [
        '3 Classes per Week',
        '30 Minutes per Class',
        'One-to-One Session',
        'WhatsApp Support',
        'Monthly Progress Report',
        '2 Days Free Demo',
      ],
    },
    {
      id: 2,
      name: 'Standard',
      icon: '⭐',
      price: 4000,
      period: 'month',
      classesPerWeek: 5,
      classDuration: '45 mins',
      popular: true,
      features: [
        '5 Classes per Week',
        '45 Minutes per Class',
        'One-to-One Session',
        'Priority WhatsApp Support',
        'Weekly Progress Report',
        'PDF Learning Materials',
        '2 Days Free Demo',
        'Parent Monthly Meeting',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      icon: '👑',
      price: 6000,
      period: 'month',
      classesPerWeek: 7,
      classDuration: '60 mins',
      popular: false,
      features: [
        '7 Classes per Week (Daily)',
        '60 Minutes per Class',
        'One-to-One Session',
        '24/7 WhatsApp Support',
        'Daily Progress Report',
        'All Learning Materials',
        '2 Days Free Demo',
        'Parent Monthly Meeting',
        'Certificate on Completion',
        'Flexible Timing',
      ],
    },
  ],
  note: 'All prices are flexible. Special discounts available for siblings and full-year enrollment. Contact us for custom packages.',
};

const DEFAULT_STATS = [
  { id: 1, value: 500, suffix: '+', label: 'Students Enrolled', icon: '👨‍🎓' },
  { id: 2, value: 15, suffix: '+', label: 'Countries Reached', icon: '🌍' },
  { id: 3, value: 10, suffix: '+', label: 'Expert Teachers', icon: '👨‍🏫' },
  { id: 4, value: 20, suffix: '+', label: 'Years Experience', icon: '📅' },
];

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: 'Aisha Khan',
    country: 'United Kingdom 🇬🇧',
    rating: 5,
    text: 'Al-Frid has been a blessing for our family. My daughter completed her Nazra Quran in just 4 months. The teachers are incredibly patient and knowledgeable. Highly recommended!',
    course: 'Nazra Quran',
  },
  {
    id: 2,
    name: 'Muhammad Yusuf',
    country: 'Canada 🇨🇦',
    rating: 5,
    text: 'I was skeptical about online Quran learning but Al-Frid exceeded all my expectations. My son is now memorizing Quran and his Tajweed has improved tremendously. JazakAllah Khair!',
    course: 'Hifz & Tajweed',
  },
  {
    id: 3,
    name: 'Fatima Al-Rahman',
    country: 'Saudi Arabia 🇸🇦',
    rating: 5,
    text: 'The Arabic Language course is exceptional. The teachers are native-level and very professional. The flexible timing works perfectly with my busy schedule. 10/10!',
    course: 'Arabic Language',
  },
  {
    id: 4,
    name: 'Omar Abdullah',
    country: 'Australia 🇦🇺',
    rating: 5,
    text: 'A truly Islamic experience. Dr. Ali Hassan Fridi is a remarkable scholar. My whole family now takes classes here. The free trial convinced me from day one.',
    course: 'Tafseer Quran',
  },
];

export function DataProvider({ children }) {
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('alfrid_courses');
    return saved ? JSON.parse(saved) : DEFAULT_COURSES;
  });

  const [teachers, setTeachers] = useState(() => {
    const saved = localStorage.getItem('alfrid_teachers');
    return saved ? JSON.parse(saved) : DEFAULT_TEACHERS;
  });

  const [feeStructure, setFeeStructure] = useState(() => {
    const saved = localStorage.getItem('alfrid_fees');
    return saved ? JSON.parse(saved) : DEFAULT_FEE_STRUCTURE;
  });

  const [stats] = useState(DEFAULT_STATS);
  const [testimonials] = useState(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    localStorage.setItem('alfrid_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('alfrid_teachers', JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem('alfrid_fees', JSON.stringify(feeStructure));
  }, [feeStructure]);

  const addCourse = (course) => {
    const newCourse = { ...course, id: Date.now() };
    setCourses(prev => [...prev, newCourse]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updatedCourse } : c));
  };

  const deleteCourse = (id) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const addTeacher = (teacher) => {
    const newTeacher = { ...teacher, id: Date.now() };
    setTeachers(prev => [...prev, newTeacher]);
  };

  const updateTeacher = (id, updatedTeacher) => {
    setTeachers(prev => prev.map(t => t.id === id ? { ...t, ...updatedTeacher } : t));
  };

  const deleteTeacher = (id) => {
    setTeachers(prev => prev.filter(t => t.id !== id));
  };

  const updateFeeStructure = (fees) => {
    setFeeStructure(fees);
  };

  return (
    <DataContext.Provider value={{
      courses, addCourse, updateCourse, deleteCourse,
      teachers, addTeacher, updateTeacher, deleteTeacher,
      feeStructure, updateFeeStructure,
      stats, testimonials,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
