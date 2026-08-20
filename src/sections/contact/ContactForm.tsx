import { useState, type FormEvent } from 'react';
import { Button } from '../../components/ui/Button';
import styles from './ContactForm.module.css';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

const INTERESTS = [
  'Wedding Planning',
  'Event Planning',
  'Bridal Fashion',
  'Speaking or Education',
  'General Comments',
];

type FieldErrors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'success';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(state: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!state.firstName.trim()) errors.firstName = 'First name is required.';
  if (!state.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!state.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(state.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!state.interest) errors.interest = 'Please select an interest.';
  if (!state.message.trim()) errors.message = 'Tell us how we can help.';
  return errors;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(state);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend is wired up yet — this simulates a successful submission
    // so the form is fully usable in isolation. Swap for a real endpoint.
    setStatus('success');
    setState(INITIAL_STATE);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            className={styles.input}
            value={state.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName ? <p className={styles.error}>{errors.firstName}</p> : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            className={styles.input}
            value={state.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            aria-invalid={Boolean(errors.lastName)}
          />
          {errors.lastName ? <p className={styles.error}>{errors.lastName}</p> : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={state.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className={styles.error}>{errors.email}</p> : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            value={state.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="interest">
          How Can We Help?
        </label>
        <select
          id="interest"
          className={styles.select}
          value={state.interest}
          onChange={(e) => update('interest', e.target.value)}
          aria-invalid={Boolean(errors.interest)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interest ? <p className={styles.error}>{errors.interest}</p> : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          value={state.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className={styles.error}>{errors.message}</p> : null}
      </div>

      <Button type="submit">Send Message</Button>

      {status === 'success' ? (
        <p className={styles.status} role="status">
          Thank you — your message has been received. We&rsquo;ll be in touch
          soon.
        </p>
      ) : null}
    </form>
  );
}
