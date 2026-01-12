import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass, heroUserCircle } from '@ng-icons/heroicons/outline';

interface User {
  id: number;
  name: string;
  email: string;
  title: string;
}

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, NgIconComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  viewProviders: [
    provideIcons({ heroMagnifyingGlass, heroUserCircle })
  ],
})
export class UserList {
  // User data
  private readonly userList: User[] = [
    {
      id: 1,
      name: 'Laura Soares',
      email: 'laura.soares@radixeng.com',
      title: 'data analyst',
    },
    {
      id: 2,
      name: 'Julia Motta',
      email: 'julia.motta@radixeng.com',
      title: 'business analyst',
    },
    {
      id: 3,
      name: 'Rômulo Bravo',
      email: 'romulo.bravo@radixeng.com',
      title: 'designer',
    },
    {
      id: 4,
      name: 'Andre Porto',
      email: 'andre.porto@radixeng.com',
      title: 'project coordinator',
    },
  ];

  searchQuery = signal<string>('');

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    
    if (!query) {
      return this.userList;
    }

    return this.userList.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.title.toLowerCase().includes(query)
    );
  });

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
  }
}
