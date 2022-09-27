import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Router, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import Sidebar from '../Sidebar';
import { SidebarItems } from '../../constants/SidebarItems';
import { URLSearchParams } from 'url';

// Render helper
const history = createMemoryHistory({ initialEntries: ['/overview']});
SidebarItems.push({
  link: '/test',
  name: 'Test',
  disabled: true,
  icon: 'Sample Icon'
});

function renderSideBar() {
  return render(
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="/overview" element={
            <Sidebar
              logo="https://assets.website-files.com/600e947088abe035d0238a33/601c0703e6494b699a59cc80_avion-logo.svg"
              mobileLogo="https://assets.website-files.com/600e947088abe035d0238a33/601c0703e6494b699a59cc80_avion-logo.svg"
              mobileLogoAlt='="Avion School Mobile Logo"'
              logoAlt="Avion School logo"
              items={SidebarItems}
            />
          } 
        />
      </Routes>
    </Router>
  )
}


describe('Running tests for Sidebar', () => {
  it('Sidebar renders when called', () => {
    renderSideBar();
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });

  it('Current link is highlighted', async () => {
    renderSideBar();
    const overviewElement = await screen.findByTestId('/overview');
    expect(overviewElement).toHaveStyle('background-color: rgb(231 68 68 / var(--tw-bg-opacity))');
  });

  it('Disabled links are disabled', async () => {
    renderSideBar();
    const testElement = await screen.findByTestId('/test');
    expect(testElement).toHaveClass('pointer-events-none');
  });

  // it('Clicking the corresponding links redirects you to the respective page', async () => {
  //   renderSideBar();
  //   const testNavElement = await screen.findByTestId('/instructors');
  //   expect(testNavElement).toHaveStyle('background-color: rgb(231 68 68 / var(--tw-bg-opacity))');
  // });

  
});
