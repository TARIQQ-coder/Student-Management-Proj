import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css';
import { MdEdit,MdDelete } from "react-icons/md";
import { Dialog } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid'; // install this for unique IDs

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editEventId, setEditEventId] = useState(null);

  const [form, setForm] = useState({
    title: '',
    details: '',
    time: '',
  });

  const openModal = (date) => {
    setSelectedDate(date);
    setIsOpen(true);
    setIsEdit(false);
    setForm({ title: '', details: '', time: '' });
  };

  const closeModal = () => {
    setIsOpen(false);
    setForm({ title: '', details: '', time: '' });
    setIsEdit(false);
    setEditEventId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: isEdit ? editEventId : uuidv4(),
      date: selectedDate,
      title: form.title,
      details: `${form.details}\n${form.time}`,
      time: form.time,
      color: 'bg-blue-100 text-blue-700',
    };

    if (isEdit) {
      setEvents(events.map(ev => ev.id === editEventId ? newEvent : ev));
    } else {
      setEvents([...events, newEvent]);
    }

    closeModal();
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      details: event.details.split('\n')[0],
      time: event.time,
    });
    setSelectedDate(event.date);
    setIsEdit(true);
    setEditEventId(event.id);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this event?');
    if (confirmed) {
      setEvents(events.filter(ev => ev.id !== id));
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const matchingEvents = events.filter(
        (e) =>
          e.date.getFullYear() === date.getFullYear() &&
          e.date.getMonth() === date.getMonth() &&
          e.date.getDate() === date.getDate()
      );

      return matchingEvents.map((event) => (
         <div
    key={event.id}
    className={`p-2 mt-1 rounded-md ${event.color} group relative text-sm`}
  >
    <div className="relative">
      <div>
        <p className="font-semibold text-xs">{event.title}</p>
        <p className="text-[10px] whitespace-pre-line leading-tight">
          {event.details}
        </p>
      </div>
      <div className="flex justify-between gap-1 opacity-0 group-hover:opacity-100 transition">
        <button
          className="p-[2px] bg-gray-200 hover:bg-gray-300 rounded-full absolute -top-9 -left-3.5"
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(event);
          }}
        >
          <MdEdit className="w-4 h-4" />
        </button>
        <button
          className="p-[2px] bg-gray-200 hover:bg-gray-300 rounded-full absolute -top-9 -right-3.5"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(event.id);
          }}
        >
          <MdDelete className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
      ));
    }
    return null;
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Your Schedule</h2>

      <Calendar
        onClickDay={openModal}
        value={selectedDate}
        tileContent={tileContent}
        className="react-calendar custom-calendar"
        calendarType="gregory"
        defaultView="month"
      />

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-2">
              {isEdit ? 'Edit Task' : 'Add Task'} – {selectedDate.toDateString()}
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Task</label>
                <textarea
                  rows="2"
                  value={form.details}
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-1 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                >
                  {isEdit ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Schedule;
