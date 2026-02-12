const GOOGLE_CLIENT_ID = '441531089329-2lvgctldh97sbd9b3bec144bg2dqvaqj.apps.googleusercontent.com';

const { createApp, ref, reactive, onMounted, onUnmounted, nextTick, watch } = Vue;

createApp({
  setup() {
    const scrolled = ref(false);
    const mobileMenu = ref(false);
    const email = ref('');
    const signedUp = ref(false);
    const typedText = ref('');
    const user = ref(null);
    const showUserMenu = ref(false);

    const phrases = [
      'Remove the person in the background…',
      'Change the sky to a golden sunset…',
      'Make the car red and add motion blur…',
      'Upscale to 4K and enhance details…',
    ];

    const stats = [
      { value: '4K', label: 'Native Output' },
      { value: '50K+', label: 'Creators' },
      { value: '99.7%', label: 'Pixel Accuracy' },
      { value: '<2s', label: 'Avg. Processing' },
    ];

    const features = [
      { icon: '🎯', title: '4K Native Output', desc: 'Process and output at full 4K resolution. No downscaling, no quality loss — every pixel rendered at maximum fidelity.' },
      { icon: '🔒', title: 'Pixel Preservation', desc: 'Areas you don\'t edit stay byte-identical. Zero degradation to untouched regions, guaranteed by our patented diffusion masking.' },
      { icon: '💬', title: 'Natural Language', desc: 'Describe your edit in plain English. No complex tools, no learning curve. Just type what you see in your mind\'s eye.' },
      { icon: '🔗', title: 'API & Integrations', desc: 'REST API, OpenClaw skill integration. Fits right into your existing creative agent ecosystem and workflow.' },
    ];

    const steps = [
      { icon: '📤', title: 'Upload', desc: 'Drag and drop your image or video. We support all major formats up to 8K resolution.' },
      { icon: '💬', title: 'Describe', desc: 'Type what you want to change in natural language. Be as specific or vague as you like.' },
      { icon: '📥', title: 'Download', desc: 'Get your edited file in seconds. Full resolution, no watermarks, ready to publish.' },
    ];

    const gallery = [
      { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', label: 'Before → After', title: 'Background Removal', desc: 'Instantly remove or replace backgrounds with a single sentence.' },
      { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', label: 'Before → After', title: 'Style Transfer', desc: 'Transform photos into paintings, sketches, or any artistic style.' },
      { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', label: 'Before → After', title: 'Object Editing', desc: 'Add, remove, or modify objects naturally within any scene.' },
      { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', label: 'Before → After', title: 'Color Grading', desc: 'Professional color grading with natural language descriptions.' },
      { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', label: 'Before → After', title: 'Super Resolution', desc: 'Upscale low-res images to 4K with AI-generated detail.' },
      { bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', label: 'Before → After', title: 'Video Effects', desc: 'Apply cinematic effects across video with temporal consistency.' },
    ];

    const pricing = [
      { name: 'Free', price: '0', popular: false, cta: 'Start Free', features: ['50 edits/month', '1080p output', 'Basic models', 'Community support', 'Watermarked exports'] },
      { name: 'Pro', price: '29', popular: true, cta: 'Start Pro Trial', features: ['Unlimited edits', '4K output', 'All AI models', 'Priority support', 'No watermarks', 'API access', 'Video editing'] },
      { name: 'Enterprise', price: 'Custom', popular: false, cta: 'Contact Sales', features: ['Everything in Pro', '8K output', 'Custom models', 'Dedicated support', 'SLA guarantee', 'On-premise option', 'SSO & audit logs'] },
    ];

    const testimonials = [
      { text: 'BluePixel replaced three tools in my workflow. I just describe what I want and it happens. The 4K output quality is unmatched.', name: 'Sarah Chen', role: 'Photographer', initials: 'SC', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
      { text: 'We process 10,000+ product images monthly. BluePixel\'s API cut our editing costs by 80% while improving quality.', name: 'Marcus Johnson', role: 'E-commerce Director', initials: 'MJ', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
      { text: 'The pixel preservation is real — I tested it. Untouched areas are literally byte-identical. This is serious technology.', name: 'Dr. Yuki Tanaka', role: 'Computer Vision Researcher', initials: 'YT', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    ];

    const faqs = reactive([
      { q: 'What formats does BluePixel support?', a: 'We support JPEG, PNG, WebP, TIFF, RAW, MP4, MOV, and ProRes. Input up to 8K, output up to 4K (8K on Enterprise).', open: false },
      { q: 'How does pixel preservation work?', a: 'Our patented diffusion masking technology identifies regions that shouldn\'t change and excludes them from the generation pipeline entirely. The result is byte-identical preservation of untouched areas.', open: false },
      { q: 'Is my content used for training?', a: 'Never. Your uploads are processed in isolated containers, encrypted at rest, and permanently deleted within 24 hours. Enterprise plans offer on-premise deployment.', open: false },
      { q: 'Can I use the API for commercial projects?', a: 'Yes! Pro and Enterprise plans include full commercial usage rights for all AI-generated edits. See our terms for details.', open: false },
      { q: 'What languages are supported for instructions?', a: 'BluePixel understands English, Chinese, Japanese, Spanish, French, German, Korean, and 20+ other languages natively.', open: false },
    ]);

    function toggleFaq(i) {
      faqs[i].open = !faqs[i].open;
    }

    function handleSignup() {
      signedUp.value = true;
      email.value = '';
    }

    function decodeJwt(token) {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    }

    function handleGoogleCallback(response) {
      const payload = decodeJwt(response.credential);
      user.value = {
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      };
      localStorage.setItem('bluepixel_user', JSON.stringify(user.value));
    }

    function logout() {
      user.value = null;
      showUserMenu.value = false;
      localStorage.removeItem('bluepixel_user');
      // Re-render the sign-in button after logout
      nextTick(() => renderGoogleButton());
    }

    function renderGoogleButton() {
      const el = document.getElementById('google-signin-btn');
      if (el && window.google) {
        google.accounts.id.renderButton(el, {
          theme: 'filled_blue',
          size: 'large',
          width: 320,
          text: 'continue_with',
        });
      }
    }

    function googleManualLogin() {
      if (window.google) {
        google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // Fallback: use the rendered button or prompt again
            const btn = document.querySelector('#google-signin-btn div[role="button"]');
            if (btn) btn.click();
          }
        });
      }
    }

    // Expose callback globally for Google GSI
    window.handleGoogleCallback = handleGoogleCallback;

    // Typing animation
    let typeInterval;
    onMounted(() => {
      // Restore user session
      const saved = localStorage.getItem('bluepixel_user');
      if (saved) user.value = JSON.parse(saved);

      // Init Google Sign-In
      const initGoogle = () => {
        if (window.google) {
          google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleCallback,
          });
          google.accounts.id.prompt(); // One Tap prompt
          nextTick(() => renderGoogleButton());
        } else {
          setTimeout(initGoogle, 500);
        }
      };
      // Wait for Vue to render DOM first
      nextTick(() => initGoogle());

      // Close user menu on outside click
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) showUserMenu.value = false;
      });
      let pi = 0, ci = 0, deleting = false;
      typeInterval = setInterval(() => {
        const phrase = phrases[pi];
        if (!deleting) {
          typedText.value = phrase.slice(0, ci + 1);
          ci++;
          if (ci >= phrase.length) {
            deleting = true;
            setTimeout(() => {}, 1500);
          }
        } else {
          typedText.value = phrase.slice(0, ci - 1);
          ci--;
          if (ci <= 0) {
            deleting = false;
            pi = (pi + 1) % phrases.length;
          }
        }
      }, 60);

      // Scroll handler
      const onScroll = () => {
        scrolled.value = window.scrollY > 50;
        // Reveal animations
        document.querySelectorAll('.reveal').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            el.classList.add('revealed');
          }
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const id = a.getAttribute('href');
          if (id === '#') return;
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    });

    onUnmounted(() => clearInterval(typeInterval));

    return { scrolled, mobileMenu, email, signedUp, typedText, stats, features, steps, gallery, pricing, testimonials, faqs, toggleFaq, handleSignup, user, showUserMenu, logout, googleManualLogin };
  }
}).mount('#app');
