import React, { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Hero from './pages/home/Hero';
import Footer from './components/Footer';
import AppointmentForm from './components/Appointment';


function AppLayout() {
  const [isFormShowing, setIsFormShowing] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header showForm={() => setIsFormShowing(true)} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {isFormShowing && (
        <AppointmentForm
          onClose={() => setIsFormShowing(false)}
        />
      )}
    </div>
  );
}

export default AppLayout;
