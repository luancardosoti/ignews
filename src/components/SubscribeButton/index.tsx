import { signIn, useSession } from 'next-auth/react';
import { stripe } from '../../services/stripe';
import { getStripeJs } from '../../services/stripe-js';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return;
    }

    // criação da checkout session
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripeJs = await getStripeJs();

      await stripeJs.redirectToCheckout({ sessionId: sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}