# Responsive 3-step onboarding flow for web application using React

## Project Overview

This project implements a responsive 3-step onboarding flow for a web application using React 19, TypeScript, and Tailwind CSS. The application guides users through mobile verification, personal details collection, and password setup with comprehensive form validation and persistence.

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

- **Step 1**: Mobile number input with OTP verification
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
- Keyboard navigation support
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

## Assumptions & Limitations

### Assumptions Made

1. **Mock API**: Simulated backend interactions for OTP sending and form submission
2. **Local Storage**: Form data persistence using browser localStorage
3. **No Backend**: All data is handled client-side for demonstration purposes
4. **Browser Support**: Modern browsers with ES6+ support

### Known Limitations

1. **No Real Backend**: This is a frontend-only implementation
2. **No Real OTP**: OTP is simulated for demonstration
3. **No Data Persistence**: Form data is not saved to a real database
4. **No/Limited Unit Tests**: Focus was on functionality over test coverage, my have time to include some

## Future Enhancements

### Potential Improvements

1. **Item**: Notes...

## Conclusion

...

The project showcases:

- **Technical Proficiency**: Modern React patterns and TypeScript
- **User Experience**: Intuitive flow with proper validation and feedback
- **Code Quality**: Clean, readable, and maintainable code
- **Best Practices**: Proper separation of concerns and component architecture
- **Accessibility**: Inclusive design with proper ARIA support

This solution provides a solid foundation that could easily be extended with real backend integration, additional features, and comprehensive testing.
