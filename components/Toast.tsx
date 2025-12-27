
import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { ToastState } from '../types';

interface ToastProps extends ToastState {
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!type) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const Icon = type === 'success' ? CheckCircle : XCircle;

  return (
    <div className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white ${bgColor} animate-bounce-in z-50`}>
      <Icon size={20} />
      <span className="font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 hover:bg-white/20 p-1 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
