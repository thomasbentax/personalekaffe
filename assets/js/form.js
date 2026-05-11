// Signup form validation and submission handler

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  const successMessage = document.getElementById('successMessage');

  if (!form) return;

  // Validation rules
  const validators = {
    name: (value) => {
      if (!value || value.trim().length === 0) {
        return 'Navn er påkrævet';
      }
      if (value.trim().length < 2) {
        return 'Navn skal være mindst 2 tegn';
      }
      return null;
    },
    email: (value) => {
      if (!value || value.trim().length === 0) {
        return 'Email er påkrævet';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Ugyldigt email-format';
      }
      return null;
    },
    phone: (value) => {
      if (!value || value.trim().length === 0) {
        return 'Telefonnummer er påkrævet';
      }
      const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        return 'Telefonnummer skal være 10-15 tegn';
      }
      return null;
    },
    notificationType: (value) => {
      if (!value || value === '') {
        return 'Notifikationstype er påkrævet';
      }
      return null;
    },
    frequency: (value) => {
      if (!value) {
        return 'Frekvens er påkrævet';
      }
      return null;
    }
  };

  // Validate single field
  function validateField(fieldName) {
    const validator = validators[fieldName];
    const errorElement = document.getElementById(`${fieldName}-error`);
    const radioGroup = form.querySelector('.radio-group');

    if (!validator) return true;

    let fieldValue;
    let formGroup;

    if (fieldName === 'frequency') {
      fieldValue = form.querySelector('input[name="frequency"]:checked')?.value;
      formGroup = radioGroup;
    } else {
      const field = form.elements[fieldName];
      fieldValue = field.value;
      formGroup = field.closest('.form-group');
    }

    const error = validator(fieldValue);

    if (error) {
      errorElement.textContent = error;
      errorElement.classList.add('show');
      if (formGroup) formGroup.classList.add('error');
      return false;
    } else {
      errorElement.textContent = '';
      errorElement.classList.remove('show');
      if (formGroup) formGroup.classList.remove('error');
      return true;
    }
  }

  // Add real-time validation to all fields
  const fieldNames = ['name', 'email', 'phone', 'notificationType'];
  fieldNames.forEach(fieldName => {
    const field = form.elements[fieldName];
    field.addEventListener('blur', () => validateField(fieldName));
    field.addEventListener('input', () => {
      if (field.closest('.form-group').classList.contains('error')) {
        validateField(fieldName);
      }
    });
  });

  // Handle frequency radio button validation
  const frequencyRadios = form.querySelectorAll('input[name="frequency"]');
  frequencyRadios.forEach(radio => {
    radio.addEventListener('change', () => validateField('frequency'));
  });

  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    fieldNames.forEach(fieldName => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });
    if (!validateField('frequency')) {
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Prepare form data
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      notificationType: form.elements.notificationType.value,
      frequency: form.querySelector('input[name="frequency"]:checked').value
    };

    // Disable submit button during submission
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    try {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sender...';

      // Check if Power Automate URL is configured
      if (!window.BENTAX_CONFIG || !window.BENTAX_CONFIG.flowUrl) {
        throw new Error(
          'Power Automate flow URL er ikke konfigureret. ' +
          'Kopier config.example.js til config.js og tilføj flowUrl.'
        );
      }

      // Send to Power Automate
      const response = await fetch(window.BENTAX_CONFIG.flowUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Show success message
      form.style.display = 'none';
      successMessage.style.display = 'block';

      // Reset form after 3 seconds
      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Clear any error states
        fieldNames.forEach(fieldName => {
          const errorElement = document.getElementById(`${fieldName}-error`);
          const formGroup = form.elements[fieldName].closest('.form-group');
          errorElement.textContent = '';
          errorElement.classList.remove('show');
          if (formGroup) formGroup.classList.remove('error');
        });

        const frequencyGroup = form.querySelector('.radio-group');
        const frequencyError = document.getElementById('frequency-error');
        frequencyError.textContent = '';
        frequencyError.classList.remove('show');
        frequencyGroup.classList.remove('error');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);

      // Show error message in an alert or in the form
      const errorMsg = error.message || 'Der opstod en fejl ved indsendelse af formularen.';

      // Create a temporary error display
      const errorDiv = document.createElement('div');
      errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;';
      errorDiv.textContent = errorMsg;
      form.insertBefore(errorDiv, form.firstChild);

      // Remove error after 5 seconds
      setTimeout(() => errorDiv.remove(), 5000);

      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});
