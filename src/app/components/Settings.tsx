import { ArrowLeft, User, Lock, Globe, LogOut, UserPlus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
        <div className="max-w-md mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <Card className="p-8 bg-white border-emerald-200">
            <div className="text-center mb-8">
              <h2 className="text-foreground mb-2">
                {showLogin ? 'Login' : 'Sign Up'}
              </h2>
              <p className="text-muted-foreground">
                {showLogin
                  ? 'Welcome back to Agrowatch'
                  : 'Create your Agrowatch account'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {!showLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              {!showLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" placeholder="••••••••" />
                </div>
              )}
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                {showLogin ? 'Login' : 'Sign Up'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="text-emerald-600 hover:underline"
              >
                {showLogin
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Login'}
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Settings */}
          <Card className="p-6 bg-white border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-emerald-600" />
              <h3 className="text-foreground">Account Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="farm_admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-settings">Email</Label>
                <Input id="email-settings" type="email" defaultValue="admin@agrowatch.com" />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
            </div>
          </Card>

          {/* Change Password */}
          <Card className="p-6 bg-white border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-emerald-600" />
              <h3 className="text-foreground">Change Password</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current Password</Label>
                <Input id="current" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new">New Password</Label>
                <Input id="new" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-new">Confirm New Password</Label>
                <Input id="confirm-new" type="password" placeholder="••••••••" />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Update Password</Button>
            </div>
          </Card>

          {/* Language Settings */}
          <Card className="p-6 bg-white border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-emerald-600" />
              <h3 className="text-foreground">Language & Region</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Save Language</Button>
            </div>
          </Card>

          {/* Logout */}
          <Card className="p-6 bg-white border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <LogOut className="w-6 h-6 text-red-600" />
              <h3 className="text-foreground">Logout</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Sign out of your Agrowatch account
            </p>
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700"
            >
              Logout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
