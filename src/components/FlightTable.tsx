import React from 'react';
import { Clock, CheckCircle, AlertCircle, Plane, Loader } from 'lucide-react';
import { DAILY_FLIGHTS } from '../constants';
import { Flight } from '../types';

const getStatusStyle = (status: Flight['status']) => {
  switch (status) {
    case 'on-time':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'delayed':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'boarding':
      return 'bg-amber-100 text-amber-700 border-amber-200 animate-pulse';
    case 'scheduled':
      return 'bg-sky-100 text-sky-700 border-sky-200';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const getStatusText = (status: Flight['status']) => {
  switch (status) {
    case 'on-time': return 'في الموعد';
    case 'delayed': return 'مؤجلة';
    case 'boarding': return 'نداء أخير';
    case 'scheduled': return 'مجدولة';
    default: return status;
  }
};

const getStatusIcon = (status: Flight['status']) => {
  switch (status) {
    case 'on-time': return <CheckCircle size={16} />;
    case 'delayed': return <AlertCircle size={16} />;
    case 'boarding': return <Loader size={16} className="animate-spin" />;
    default: return <Clock size={16} />;
  }
};

export const FlightTable: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">جدول الرحلات اليومية</h2>
            <p className="text-slate-500">آخر تحديث: منذ 5 دقائق</p>
          </div>
          <button className="bg-white text-sky-600 border border-sky-200 hover:bg-sky-50 px-6 py-2 rounded-lg font-semibold transition-colors">
            عرض كل الرحلات
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-600">
                <tr>
                  <th className="py-5 px-6 font-semibold">رقم الرحلة</th>
                  <th className="py-5 px-6 font-semibold">من</th>
                  <th className="py-5 px-6 font-semibold">إلى</th>
                  <th className="py-5 px-6 font-semibold">الخطوط</th>
                  <th className="py-5 px-6 font-semibold">الوقت</th>
                  <th className="py-5 px-6 font-semibold">السعر (يبدأ من)</th>
                  <th className="py-5 px-6 font-semibold">الحالة</th>
                  <th className="py-5 px-6 font-semibold text-center">حجز</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DAILY_FLIGHTS.map((flight) => (
                  <tr key={flight.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-800 flex items-center gap-2">
                      <Plane size={18} className="text-slate-400" />
                      {flight.id}
                    </td>
                    <td className="py-5 px-6 text-slate-600">{flight.origin}</td>
                    <td className="py-5 px-6 text-slate-800 font-medium">{flight.destination}</td>
                    <td className="py-5 px-6 text-slate-600">{flight.airline}</td>
                    <td className="py-5 px-6 font-mono text-slate-700 dir-ltr text-right">{flight.time}</td>
                    <td className="py-5 px-6 font-bold text-sky-600">{flight.price}</td>
                    <td className="py-5 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(flight.status)}`}>
                        {getStatusIcon(flight.status)}
                        {getStatusText(flight.status)}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <a 
                        href="#contact"
                        className="text-sm bg-slate-900 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        احجز
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3 text-sm text-blue-800">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p>
            ملاحظة: الأسعار والمواعيد قابلة للتغيير بناءً على توفر المقاعد وسياسات شركات الطيران. يرجى التواصل معنا للتأكيد النهائي.
          </p>
        </div>
      </div>
    </section>
  );
};