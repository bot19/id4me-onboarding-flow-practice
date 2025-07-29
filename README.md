# Responsive 3-step onboarding flow for web app

## Project Overview

This project implements a responsive 3-step onboarding flow for a web application using React 19, TypeScript, and Tailwind CSS. The application guides users through mobile verification, personal details collection, and password setup with comprehensive form validation and persistence.

Initial planning/visualisation in [tldraw](https://www.tldraw.com/f/qEb5ev4E7duSW61d0sRrc?d=v-760.-2.3457.2802.obZgBKSkg0C5GXAgahaq0):

![diagram](./public/2025-07%20v1b%20iD4me%20onboard%20flow%20form.png)

## Technical Stack & Architecture

### Core Technologies

- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type safety and better developer experience
- **Vite 7.0.4** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Hook Form 7.61.1** - Performant form management
- **Zod 4.0.10** - Schema validation

### Development Tools

- **ESLint 9.30.1** - Code linting with React-specific rules
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Lint-staged 16.1.2** - Pre-commit linting

## Implementation Details

### Project Structure

```
src/
├── components/
│   ├── authenticate/   # OTP verification components
│   ├── onboardForm/    # Multi-step form components
├── contexts/           # React contexts for state management
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API service layer
├── styles/             # Global CSS styling
├── ui/                 # Reusable UI components
├── utils/              # Utility functions
└── validators/         # Form validation schemas
```

### Key Features Implemented

#### 1. Multi-Step Form Flow

- **Step 1**: Mobile number input with OTP verification (acts as authentication)
- **Step 2**: Personal details collection (name, email, DOB, gender)
- **Step 3**: Password creation with strength validation
- **Success**: Completion screen with "Get Started" button

#### 2. Form Persistence & State Management

- Custom `FormContext` for global form state
- `useFormPersistence` hook for localStorage integration
- Data persists across step navigation and page refreshes

#### 3. Validation & Error Handling

- Zod schemas for type-safe validation
- Real-time validation feedback
- Comprehensive error messages
- Password strength indicator with visual feedback

#### 4. User Experience Enhancements

- Progress indicator showing current step (1/3, 2/3, 3/3)
- Loading states during "API calls"
- Responsive design for mobile and desktop

#### 5. Accessibility Features

- Proper ARIA labels and semantic HTML
- Keyboard navigation support (form can be completed via just keyboard)
- Focus management between form fields
- Screen reader friendly error messages

### Technical Decisions & Rationale

#### 1. React Hook Form + Zod

- **Why**: Performance-focused form library with minimal re-renders
- **Benefits**: Built-in validation, error handling, and form state management
- **Zod Integration**: Type-safe validation schemas that work seamlessly with TypeScript

#### 2. Context API for State Management

- **Why**: Lightweight solution for form state that needs to be shared across components
- **Benefits**: No external dependencies, React-native state management
- **Implementation**: Separate contexts for form data and onboarding flow state

#### 3. Custom Hooks for Business Logic

- **Why**: Separation of concerns and reusability
- **Examples**: `useFormPersistence`, `useOnboarding`, `useOnboardForm`
- **Benefits**: Testable, reusable, and clean component code

#### 4. Tailwind CSS for Styling

- **Why**: Utility-first approach for rapid development
- **Benefits**: Consistent design system, responsive utilities, small bundle size
- **Custom Colors**: Limited palette (primary, secondary, accent, bg-grey, bg-light)

#### 5. TypeScript Throughout

- **Why**: Type safety and better developer experience
- **Benefits**: Catch errors at compile time, better IDE support, self-documenting code

## Code Quality & Best Practices

### 1. Component Architecture

- **Separation of Concerns**: UI components, business logic, and data management are clearly separated
- **Reusability**: Common UI components (Button, Input, Feedback) are reusable
- **Composition**: Components are composed rather than inherited

### 2. Type Safety

- Comprehensive TypeScript interfaces for all data structures
- Strict type checking enabled
- Proper typing for form data, API responses, and component props

### 3. Error Handling

- Graceful error handling for form validation
- User-friendly error messages
- Loading states for async operations

### 4. Performance Considerations

- React Hook Form's optimized re-rendering
- Efficient state updates using React's built-in optimizations

## Setup & Installation

### Prerequisites

- Node.js: built with v22.14.0
- npm (v10.9.2) or yarn (v1.22.22, v4.9.2): verified works

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/bot19/id4me-onboarding-flow-practice.git
cd id4me-onboarding-flow-practice

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run test suite

## Testing & Quality Assurance

### Code Quality Tools

- **ESLint**: Enforces code style and catches potential issues
- **Prettier**: Consistent code formatting
- **Husky + Lint-staged**: Pre-commit hooks for quality control
- **TypeScript**: Compile-time error checking

### API response mocking

- **Send OTP to mobile**: "0433222111" = mobile already in use, "0400000000" = network/server error
- **Validate OTP code**: "000000" = wrong OTP code

## Assumptions & Limitations

### Assumptions Made

1. **Mock API**: Simulated backend interactions for OTP sending and form submission
2. **Authenticate to onboard**: 3-step with 1st step as a login-like step/feature to give access to the onboarding form after
3. **Local Storage**: Form data persistence using browser localStorage
4. **No Backend**: All data is handled client-side for demonstration purposes
5. **Browser Support**: Modern browsers with ES6+ support

### Known Limitations

1. **No Real Backend**: This is a frontend-only implementation
2. **No Real OTP**: OTP is simulated for demonstration
3. **No Data Persistence**: Form data is not saved to a real database
4. **No/Limited Unit Tests**: Focus was on functionality over test coverage, my have time to include some

## Potential Improvements

1. **Top-level toast/notification system**: Can handle API response messages better, improve visibility and user experience
2. **Authentication gating**: Better implementation of auth gating to ensure only verified can complete onboarding flow
3. **Upsize form UI**: Improved visibility on larger desktops, better user experience
4. **More thorough testing**: Ensure critical onboarding flow is error/issue free
5. **Improve accessibility**: Accessibility can more thoroughly tested, improvements can be made
6. **WebOTP**: [New/experimental](https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API), but could add for better user experience with fallback
7. **More Animations**: Increase visuals and interaction experience, can have positive user impact
8. **Age limiting**: Perhaps we can restrict age limits, eg: from 18-80
9. **Custom fonts**: Enhance visual quality and perhaps readability

## Conclusion/final thoughts

This form would be significantly more straight forward if it could be 1 big multi-step form, however by putting the Mobile verification first, I saw that as a login-like page/step that only verified users can continue onward to onboard.

Thus I separated it from steps 2 and 3, so while it is an "onboarding flow" to me it was like authenticate + onboarding form.

It was a fun project. A lot of places will use off-the-shelf forms/platforms, so it was fun to build one from scratch using modern tech/standards. Thanks for your time.

The project showcases:

- **Technical Proficiency**: Modern React patterns and TypeScript
- **User Experience**: Intuitive flow with proper validation and feedback
- **Code Quality**: Clean, readable, and maintainable code
- **Best Practices**: Proper separation of concerns and component architecture
- **Accessibility**: Inclusive design with proper ARIA support

This solution provides a solid foundation that could easily be extended with real backend integration, additional features, and comprehensive testing.
