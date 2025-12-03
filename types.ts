export type ViewState = 'login' | 'register' | 'dashboard' | 'system-detail' | 'add-system' | 'settings' | 'reports' | 'team';

export interface System {
  id: string;
  name: string;
  url: string;
  status: 'UP' | 'DOWN' | 'WARNING';
  uptime: number;
  responseTime: number | null; // null if down
  lastChecked: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Member' | 'Viewer';
  joinDate: string;
  status: 'Active' | 'Pending';
  avatarUrl: string;
}

export interface MetricData {
  time: string;
  value: number;
}
