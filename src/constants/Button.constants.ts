/* 
  Tailwind classes were not exactly built for dynamic naming with template literal strings in mind, 
  so these have been declared in advance in order for their classes to be created when starting the
  application.
*/


export const button_colors = {
  primary: {
    solid: {
      default: 'bg-primary-500 text-grayscale-light-white shadow-sm rounded-2xl border-transparent',
      hover: 'hover:bg-primary-600 ',
      pressed: 'active:bg-primary-700 ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    outline: {
      default: 'bg-grayscale-light-white border-grayscale-light-body-border text-primary-500 shadow-sm ',
      hover: 'hover:bg-primary-500 hover:border-transparent hover:text-grayscale-light-white ',
      pressed: 'active:bg-primary-700 active:border-transparent active:text-primary-white ',
      disabled: 'opacity-50 border-primary-100 hover:cursor-not-allowed'
    },
    ghost: {
      default: 'bg-grayscale-light-white text-primary-500 border-transparent ',
      hover: 'hover:bg-primary-500 hover:text-grayscale-light-white ',
      pressed: 'active:bg-primary-700 active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    }
  },
  secondary: {
    solid: {
      default: 'bg-grayscale-light-body-border text-grayscale-light-body-text border-transparent shadow-sm ',
      hover: 'hover:bg-grayscale-light-placeholder hover:text-grayscale-light-body-text ',
      pressed: 'active:bg-grayscale-light-body-text active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    outline: {
      default: 'bg-grayscale-light-white text-grayscale-light-body-text border-grayscale-light-body-border shadow-sm ',
      hover: 'hover:bg-grayscale-light-body-border ',
      pressed: 'active:bg-grayscale-light-body-text active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    ghost: {
      default: 'bg-grayscale-light-white text-grayscale-light-body-text border-transparent',
      hover: 'hover:bg-grayscale-light-body-border ',
      pressed: 'active:bg-grayscale-light-body-text active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    }
  },
  error: {
    solid: {
      default: 'bg-error-500 text-grayscale-light-white border-transparent shadow-sm ',
      hover: 'hover:bg-error-600 ',
      pressed: 'active:bg-error-700 ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    outline: {
      default: 'bg-grayscale-light-white border-grayscale-light-body-border text-error-500 shadow-sm ',
      hover: 'hover:bg-error-500 hover:text-grayscale-light-white hover:border-transparent',
      pressed: 'active:bg-error-700 active:text-grayscale-light-white active:border-transparent',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    ghost: {
      default: 'bg-grayscale-light-white text-error-500 border-transparent ',
      hover: 'hover:bg-error-500 hover:text-grayscale-light-white ',
      pressed: 'active:bg-error-700 active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    }
  },
  success: {
    solid: {
      default: 'bg-success-500 text-grayscale-light-white border-transparent shadow-sm ',
      hover: 'hover:bg-success-600 ',
      pressed: 'active:bg-success-700 ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    outline: {
      default: 'bg-grayscale-light-white border-grayscale-light-body-border text-success-500 shadow-sm ',
      hover: 'hover:bg-success-500 hover:border-transparent hover:text-grayscale-light-white hover:border-transparent',
      pressed: 'active:bg-success-700 active:border-transparent ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    ghost: {
      default: 'bg-grayscale-light-white text-success-500 border-transparent ',
      hover: 'hover:bg-success-500 hover:text-grayscale-light-white ',
      pressed: 'active:bg-success-700 active:text-grayscale-light-white ',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    }
  },
  warning: {
    solid: {
      default: 'bg-warning-500 text-grayscale-light-white border-transparent shadow-sm',
      hover: 'hover:bg-warning-600 hover:text-grayscale-light-white',
      pressed: 'active:bg-warning-700 active:text-grayscale-light-white',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    outline: {
      default: 'bg-grayscale-light-white border-grayscale-light-body-border text-warning-500 shadow-sm',
      hover: 'hover:bg-warning-500 hover:text-grayscale-light-white hover:border-transparent',
      pressed: 'active:bg-warning-700 active:text-grayscale-light-white active:border-transparent',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    },
    ghost: {
      default: 'bg-grayscale-light-white text-warning-500 border-transparent',
      hover: 'hover:bg-warning-500 hover:text-grayscale-light-white',
      pressed: 'active:bg-warning-700 active:text-grayscale-light-white',
      disabled: 'opacity-50 hover:cursor-not-allowed'
    }
  }
}
