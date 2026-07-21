# BSCS Attendance Register System

[![Vercel](https://vercelbadge.vercel.app/api/abdul-basit-codes/attendance-register)](https://attendance-register.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A beautiful, fully-functional attendance tracking system designed for BSCS classes. Built with vanilla JavaScript, this application provides a seamless way to mark and track student attendance with a charming chalkboard-inspired interface.

## ✨ Live Demo

**🌐 [View Live Demo](https://attendance-register.vercel.app)**

---

## 📖 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [Installation & Setup](#-installation--setup)
- [Deployment to Vercel](#-deployment-to-vercel)
- [How It Works](#-how-it-works)
- [API Reference](#-api-reference)
- [Usage Guide](#-usage-guide)
- [Data Storage](#-data-storage)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Features

### Core Functionality
- **📝 Student Management**
  - Add students with ID and name
  - Remove students from the register
  - Search students by name or ID
  - View complete student list with attendance history

- **✅ Attendance Tracking**
  - Mark students as Present or Absent for any date
  - Navigate between different dates (previous/next)
  - Quick "Today" button to return to current date
  - Mark all students present with one click
  - Visual indicators for present (green) and absent (red) status

- **📊 Statistics Dashboard**
  - Total number of students
  - Present count for today
  - Absent count for today
  - Overall attendance rate percentage
  - Individual attendance history (e.g., 5/8 days present)

- **💾 Data Persistence**
  - Local storage support (browser-based)
  - Cloud synchronization (when deployed)
  - Automatic data saving
  - Cross-device compatibility

- **🎨 User Experience**
  - Chalkboard-themed visual design
  - Responsive layout (mobile-friendly)
  - Smooth animations and transitions
  - Keyboard shortcuts for power users
  - Toast notifications for actions
  - Export to CSV functionality

### Technical Features
- **🔒 Data Security**
  - No third-party dependencies
  - Client-side data validation
  - Secure API endpoints

- **⚡ Performance**
  - Fast rendering with DOM manipulation
  - Lazy loading of data
  - Optimized for mobile devices

- **🌐 Cross-Platform**
  - Works on all modern browsers
  - Responsive design for all screen sizes
  - Touch-friendly interface

---

## 🖼️ Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x400/1f3d2b/f0ede4?text=Attendance+Register+-+Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/1f3d2b/f0ede4?text=Attendance+Register+-+Mobile+View)

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No frameworks required
- **Font Awesome** - Icon library
- **Google Fonts** - Kalam & IBM Plex Mono

### Backend (Optional)
- **Node.js** - Server runtime
- **Vercel** - Serverless deployment
- **File System** - JSON data storage

### Deployment
- **Vercel** - Hosting and deployment platform
- **Git** - Version control

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)
- [Vercel CLI](https://vercel.com/cli) (optional)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/abdul-basit-codes/attendance-register.git
cd attendance-register
