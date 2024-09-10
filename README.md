# HealthCare: Hospital Management Web Application

## Introduction

### Project Overview

HealthCare is a comprehensive web application designed for hospital management. It offers a range of features including patient appointment scheduling, doctor portals, and administrative control. The system is built to streamline hospital operations, improve patient care, and enhance communication between patients, doctors, and administrators.

### Purpose

This document serves as a guide for understanding, developing, and managing the HealthCare application. It includes details on system architecture, user roles, functionalities, and technical requirements.

### Scope

The application covers the following features:

-  **Patient Appointment Scheduling**
-  **Doctor's Portal for Managing Appointments and Patient Records**
-  **Admin Portal for Managing Hospital Operations and User Roles**
-  **Reports and Analytics for Hospital Performance**

### Technologies Used

-  **Frontend:** HTML, CSS, JavaScript, React.js
-  **Backend:** Node.js with Express.js
-  **Database:** MongoDb
-  **Authentication:** JWT (JSON Web Tokens)
-  **Hosting:** Vercel

## Features

### User Roles

#### Patient

-  Register/Login
-  Book and manage appointments
-  View medical history and prescriptions

#### Doctor

-  Login to doctor portal
-  View and manage appointments
-  Access and update patient records

#### Admin

-  Manage users (Patients, Doctors, Admins)
-  View system analytics and reports
-  Manage hospital departments and services

### Functionality

#### Appointment Management

-  Patients can book, reschedule, or cancel appointments.
-  Doctors can confirm, reschedule, or reject appointments.

#### Patient Records

-  Doctors can update patient records after each visit.
-  Patients can view their medical history and prescriptions.

#### Notifications

-  Email/SMS notifications for appointment confirmations, cancellations, and reminders.

#### Reports

-  Admin can generate reports on hospital operations, doctor performance, and patient satisfaction.

## Technical Specifications

### Database Design

-  **Tables:** Users, Appointments,Doctors Medical Records, Notifications, etc.

### API Documentation

-  List of all API endpoints with request/response formats
-  Example requests and responses for each API

### Security

-  User authentication using JWT
-  Role-based access control (RBAC)
-  Data encryption standards for sensitive information

### Testing

-  **Testing Types:** Unit testing, Integration testing, and End-to-End testing
-  **Tools:** Jest, Mocha, Selenium, etc.
-  Testing strategies for frontend, backend, and database

## Demo Links

-  [Live Application Demo](https://healthcare-8a91b.web.app)

## Design Guidelines

### Color Choices

-  **Primary Color:** `#078FF7`
-  **Primary Text:** `#000000` (Black)
-  **Description Text:** `#4D5A68`
-  **Title Text:** `#04518C`
-  **Background Primary:** `#F8F9FA`
-  **White Background:** `#FFFFFF`
-  **Light Background Blue Variant:** `#DBEFFE`
-  **Footer Background:** `#023154`
-  **Footer Text:** `#FFFFFF` (White)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/smsohag32/health-care-frontend.git
   ```
