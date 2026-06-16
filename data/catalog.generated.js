window.GENAI_CATALOG = {
  "metadata": {
    "name": "GenAI Index",
    "description": "Track GenAI models, platforms, pricing, and availability in one place. Updated daily.",
    "extractedAt": "2026-06-15T10:13:40.629Z",
    "lastBuiltAt": "2026-06-16T10:07:23.911Z",
    "sourceStatus": {
      "checkedAt": "2026-06-16T10:06:53.670Z",
      "ok": false,
      "results": [
        {
          "id": "higgsfield",
          "name": "Higgsfield",
          "url": "https://higgsfield.ai/",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:51.365Z",
          "durationMs": 478,
          "matches": {
            "GPT Image": true,
            "Seedance": true,
            "Kling": true,
            "Sora": true,
            "Nano Banana": true,
            "FLUX": true,
            "Veo": true,
            "Wan": true,
            "Recraft": true
          }
        },
        {
          "id": "artlist",
          "name": "Artlist",
          "url": "https://artlist.io/",
          "ok": false,
          "status": 403,
          "checkedAt": "2026-06-16T10:06:51.427Z",
          "durationMs": 61,
          "matches": {
            "Veo": false,
            "Nano Banana": false,
            "Kling": false,
            "GPT Image": false,
            "Sora": false,
            "Seedance": false,
            "Lyria": false,
            "ElevenLabs": false,
            "Wan": false
          }
        },
        {
          "id": "elevenlabs",
          "name": "ElevenLabs",
          "url": "https://elevenlabs.io/docs/overview/capabilities/image-video",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:51.896Z",
          "durationMs": 469,
          "matches": {
            "image-video": true,
            "Seedance 2": true,
            "Kling 3.0": true,
            "Google Veo 3.1": true,
            "OpenAI Sora 2": true
          }
        },
        {
          "id": "weavy",
          "name": "Figma Weave",
          "url": "https://weave.figma.com/",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:51.981Z",
          "durationMs": 85,
          "matches": {
            "Google": true,
            "Kling": true,
            "OpenAI": true,
            "Bytedance": true,
            "Black Forest Labs": true,
            "Runway": true,
            "Luma": true,
            "LTX": true,
            "Wan": true,
            "Recraft": true,
            "Bria": true
          }
        },
        {
          "id": "runway",
          "name": "Runway",
          "url": "https://runwayml.com/pricing",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:52.083Z",
          "durationMs": 102,
          "matches": {
            "Gen-4": true,
            "Veo": true,
            "Kling": true,
            "Seedance": true,
            "Flux": true
          }
        },
        {
          "id": "pika",
          "name": "Pika",
          "url": "https://pika.art/pricing",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:52.407Z",
          "durationMs": 324,
          "matches": {
            "Pika 2.5": true,
            "Pikaframes": true,
            "Pikascenes": true,
            "Pikaswaps": true
          }
        },
        {
          "id": "topview",
          "name": "Topview",
          "url": "https://www.topview.ai/",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:53.522Z",
          "durationMs": 1115,
          "matches": {
            "GPT Image2": true,
            "Seedance 2.0": true,
            "Kling 3.0": true,
            "AI Video": true,
            "AI Avatar": true
          }
        },
        {
          "id": "midjourney",
          "name": "Midjourney",
          "url": "https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans",
          "ok": false,
          "status": 403,
          "checkedAt": "2026-06-16T10:06:53.610Z",
          "durationMs": 88,
          "matches": {
            "Basic": false,
            "Standard": false,
            "Pro": false,
            "Mega": false,
            "Video": false
          }
        },
        {
          "id": "adobe-firefly",
          "name": "Adobe Firefly",
          "url": "https://www.adobe.com/products/firefly.html",
          "ok": true,
          "status": 200,
          "checkedAt": "2026-06-16T10:06:53.670Z",
          "durationMs": 60,
          "matches": {
            "GPT Image": true,
            "Nano Banana": true,
            "FLUX": true,
            "Kling AI": true,
            "Runway": true,
            "ElevenLabs": true
          }
        }
      ]
    }
  },
  "models": [
    {
      "id": "veo-3-1",
      "name": "Veo 3.1",
      "provider": "Google DeepMind",
      "category": "Video",
      "releaseDate": "2025-10-15",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video",
        "Audio"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Yes",
      "openSource": "Closed",
      "description": "Google video generation model with strong realism and audio support in supported products.",
      "strengths": [
        "Video realism",
        "Audio",
        "Google Flow"
      ],
      "status": "Current"
    },
    {
      "id": "runway-gen-4-5",
      "name": "Runway Gen-4.5",
      "provider": "Runway",
      "category": "Video",
      "releaseDate": "2026-01-01",
      "pricing": "Credit-based in Runway plans",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video",
        "Image"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Yes",
      "openSource": "Closed",
      "description": "Premium Runway video model for cinematic generation and image-to-video workflows.",
      "strengths": [
        "Cinematic video",
        "Creator workflow",
        "Consistency"
      ],
      "status": "Current"
    },
    {
      "id": "kling-3",
      "name": "Kling 3.0",
      "provider": "Kuaishou",
      "category": "Video",
      "releaseDate": "2026-02-05",
      "pricing": "Credit-based across Kling and partner platforms",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video",
        "Image",
        "Audio"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "Multimodal video generation suite with high-resolution and multi-shot workflows.",
      "strengths": [
        "Motion",
        "Short-form video",
        "Model availability via platforms"
      ],
      "status": "Current"
    },
    {
      "id": "seedance-2",
      "name": "Seedance 2.0",
      "provider": "ByteDance",
      "category": "Video",
      "releaseDate": "2026-02-01",
      "pricing": "Credit-based via partner platforms",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "ByteDance video model commonly surfaced through creative AI platforms.",
      "strengths": [
        "Speed",
        "Social video",
        "Partner availability"
      ],
      "status": "Current"
    },
    {
      "id": "sora-2",
      "name": "Sora 2",
      "provider": "OpenAI",
      "category": "Video",
      "releaseDate": "2025-10-01",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video",
        "Audio"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "OpenAI video model surfaced through selected creative platforms and OpenAI products.",
      "strengths": [
        "Prompt control",
        "Motion",
        "Audio-video generation"
      ],
      "status": "Current"
    },
    {
      "id": "gpt-image-2",
      "name": "GPT Image 2",
      "provider": "OpenAI",
      "category": "Image",
      "releaseDate": "2026-01-01",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Image"
      ],
      "contextWindow": "Prompt-based",
      "contextValue": 0,
      "apiAvailable": "Yes",
      "openSource": "Closed",
      "description": "OpenAI image generation model used for high-quality images and text rendering.",
      "strengths": [
        "Text rendering",
        "Product images",
        "Prompt fidelity"
      ],
      "status": "Current"
    },
    {
      "id": "nano-banana-pro",
      "name": "Nano Banana Pro",
      "provider": "Google",
      "category": "Image",
      "releaseDate": "2026-01-01",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Image"
      ],
      "contextWindow": "Prompt-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "Google image model family surfaced by multiple creative platforms.",
      "strengths": [
        "Fast image generation",
        "Consistency",
        "Cost-effective visuals"
      ],
      "status": "Current"
    },
    {
      "id": "wan-2-7",
      "name": "Wan 2.7",
      "provider": "Wan",
      "category": "Video",
      "releaseDate": "2026-01-01",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Video",
        "Image"
      ],
      "contextWindow": "Clip-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "Image and video generation model family listed by creative model-router platforms.",
      "strengths": [
        "Image-to-video",
        "Fast generation",
        "Workflow availability"
      ],
      "status": "Current"
    },
    {
      "id": "lyria-3",
      "name": "Lyria 3",
      "provider": "Google DeepMind",
      "category": "Audio",
      "releaseDate": "2026-01-01",
      "pricing": "Varies by access path and platform",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Music",
        "Audio"
      ],
      "contextWindow": "Track-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "Google music generation model surfaced by creative platforms for production music.",
      "strengths": [
        "Music generation",
        "Style control",
        "Production audio"
      ],
      "status": "Current"
    },
    {
      "id": "eleven-v3",
      "name": "Eleven v3",
      "provider": "ElevenLabs",
      "category": "Audio",
      "releaseDate": "2025-06-03",
      "pricing": "Usage-based in ElevenLabs plans",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Voice",
        "Audio"
      ],
      "contextWindow": "Audio-based",
      "contextValue": 0,
      "apiAvailable": "Yes",
      "openSource": "Closed",
      "description": "Expressive text-to-speech model for voiceover, dialogue, and multilingual narration.",
      "strengths": [
        "Voice quality",
        "Emotion",
        "Localization"
      ],
      "status": "Current"
    },
    {
      "id": "midjourney",
      "name": "Midjourney",
      "provider": "Midjourney",
      "category": "Image",
      "releaseDate": "2026-01-01",
      "pricing": "Subscription: $10-$120/month",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Image",
        "Video"
      ],
      "contextWindow": "Prompt-based",
      "contextValue": 0,
      "apiAvailable": "No",
      "openSource": "Closed",
      "description": "First-party image generation system for art direction, moodboards, and polished stills. It is treated as an exclusive model-platform exception.",
      "strengths": [
        "Taste",
        "Aesthetics",
        "Exclusive platform"
      ],
      "status": "Current"
    },
    {
      "id": "flux-2",
      "name": "FLUX.2",
      "provider": "Black Forest Labs",
      "category": "Image",
      "releaseDate": "2025-11-25",
      "pricing": "Varies by provider/API",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Image"
      ],
      "contextWindow": "Prompt-based",
      "contextValue": 0,
      "apiAvailable": "Yes",
      "openSource": "Mixed",
      "description": "Image model family known for photorealism and prompt fidelity.",
      "strengths": [
        "Photorealism",
        "Text rendering",
        "API availability"
      ],
      "status": "Current"
    },
    {
      "id": "adobe-firefly-image-5",
      "name": "Firefly Image 5",
      "provider": "Adobe",
      "category": "Image",
      "releaseDate": "2026-06-01",
      "pricing": "10 credits per generation in Adobe credits FAQ",
      "pricingInput": null,
      "pricingOutput": null,
      "modalities": [
        "Image"
      ],
      "contextWindow": "Prompt-based",
      "contextValue": 0,
      "apiAvailable": "Partial",
      "openSource": "Closed",
      "description": "Adobe image generation model integrated across Firefly and Creative Cloud workflows.",
      "strengths": [
        "Adobe workflow",
        "Commercial positioning",
        "Editing"
      ],
      "status": "Current"
    }
  ],
  "platforms": [
    {
      "id": "runway",
      "name": "Runway",
      "url": "https://runwayml.com",
      "category": "Creative Video",
      "pricing": "Free, Standard $12 annual, Pro $28 annual, Max $76 annual",
      "modelsAvailable": [
        "Gen-4.5",
        "Gen-4",
        "Gen-4 Turbo",
        "Veo",
        "Kling",
        "Seedance",
        "Flux"
      ],
      "apiAccess": "Yes",
      "geo": "Broad, feature-dependent",
      "description": "Creative video platform with first-party and third-party video/image models.",
      "strengths": [
        "Cinematic video",
        "Editing",
        "Creator workflows"
      ],
      "limitations": "Credit usage varies heavily by model and quality."
    },
    {
      "id": "higgsfield",
      "name": "Higgsfield",
      "url": "https://higgsfield.ai",
      "category": "Creative Video",
      "pricing": "Subscription / credit-based",
      "modelsAvailable": [
        "GPT Image 2",
        "Seedance 2.0",
        "Kling 3.0",
        "Sora 2",
        "Nano Banana Pro",
        "FLUX.2",
        "Veo 3",
        "Wan",
        "Recraft"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "AI video, image, and campaign studio with a broad third-party model catalog advertised on its public site.",
      "strengths": [
        "Broad model catalog",
        "Campaign velocity",
        "Creator formats"
      ],
      "limitations": "Exact routing, credit cost, and model versions should be checked per generation."
    },
    {
      "id": "artlist",
      "name": "Artlist",
      "url": "https://artlist.io",
      "category": "Creative Assets",
      "pricing": "Subscription",
      "modelsAvailable": [
        "Veo",
        "Nano Banana",
        "Kling",
        "GPT Image",
        "Sora",
        "Seedance",
        "Lyria",
        "ElevenLabs",
        "Wan"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "Creator platform combining licensed assets with a public AI toolkit for video, image, voiceover, and music generation.",
      "strengths": [
        "Model breadth",
        "Music licensing",
        "Creator workflow"
      ],
      "limitations": "Availability is productized through Artlist tools rather than exposed as a raw model router."
    },
    {
      "id": "elevenlabs",
      "name": "ElevenLabs",
      "url": "https://elevenlabs.io",
      "category": "Creative Audio & Video",
      "pricing": "Free and paid subscriptions; usage-based tiers",
      "modelsAvailable": [
        "Eleven v3",
        "Eleven Music",
        "Scribe",
        "Voice Isolator",
        "Dubbing",
        "Voice Library",
        "Seedance 2",
        "Kling 3.0",
        "Veo 3.1",
        "Sora 2"
      ],
      "apiAccess": "Yes",
      "geo": "Broad",
      "description": "Audio-first generation platform that also offers beta image and video generation inside ElevenCreative.",
      "strengths": [
        "Voice quality",
        "Dubbing",
        "Audio APIs",
        "Image & Video beta"
      ],
      "limitations": "Image and video model availability is plan, workspace, and geography dependent; Seedance 2 is not available in the United States."
    },
    {
      "id": "weavy",
      "name": "Weavy",
      "url": "https://weavy.ai",
      "category": "Creative Suite",
      "pricing": "Subscription / credits",
      "modelsAvailable": [
        "Google",
        "Kling",
        "OpenAI",
        "Bytedance",
        "Black Forest Labs",
        "Runway",
        "Luma",
        "LTX",
        "Wan",
        "Recraft",
        "Bria"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "Figma Weave is a node-based creative production workspace that advertises access to many major AI model providers.",
      "strengths": [
        "Workflow",
        "Provider breadth",
        "Professional editing tools"
      ],
      "limitations": "Public page lists providers, not always exact model SKUs."
    },
    {
      "id": "midjourney",
      "name": "Midjourney",
      "url": "https://www.midjourney.com",
      "category": "Creative Image",
      "pricing": "$10-$120/month plans",
      "modelsAvailable": [
        "Midjourney image generation",
        "video features"
      ],
      "apiAccess": "No public API",
      "geo": "Broad",
      "description": "Image generation platform known for art direction, aesthetics, and concept visuals. Midjourney is listed as both platform and exclusive first-party model.",
      "strengths": [
        "Aesthetics",
        "Moodboards",
        "Exclusive model"
      ],
      "limitations": "Its model is not broadly available through other platforms."
    },
    {
      "id": "topview",
      "name": "Topview",
      "url": "https://www.topview.ai",
      "category": "Creative Video",
      "pricing": "Subscription / credits",
      "modelsAvailable": [
        "GPT Image 2",
        "Seedance 2.0",
        "Kling 3.0",
        "HappyHorse",
        "AI ads",
        "avatar video",
        "product videos",
        "social video tools"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "AI video platform oriented around ads, ecommerce, product videos, and short-form content, with public pages listing GPT Image 2, Seedance 2.0, and Kling 3.0 workflows.",
      "strengths": [
        "Performance creative",
        "Ecommerce video",
        "Model-backed workflows",
        "Templates"
      ],
      "limitations": "Model access and exact generation costs vary by plan, credits, resolution, and workflow."
    },
    {
      "id": "krea",
      "name": "Krea",
      "url": "https://www.krea.ai",
      "category": "Creative Suite",
      "pricing": "Free, Basic, Pro, Max, Business",
      "modelsAvailable": [
        "Krea 2",
        "Flux",
        "Nano Banana",
        "Veo",
        "Sora",
        "Kling"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "Creative AI studio with image, video, realtime, enhancer, nodes, and model access.",
      "strengths": [
        "Model breadth",
        "Realtime images",
        "Workflow automation"
      ],
      "limitations": "Compute units are not directly comparable across models."
    },
    {
      "id": "pika",
      "name": "Pika",
      "url": "https://pika.art",
      "category": "Creative Video",
      "pricing": "Free and paid credit plans",
      "modelsAvailable": [
        "Pika 2.5",
        "Pikaframes",
        "Pikascenes",
        "Pikaswaps"
      ],
      "apiAccess": "No public general API in starter dataset",
      "geo": "Broad",
      "description": "Playful video generation platform for fast social edits, effects, and image-to-video clips.",
      "strengths": [
        "Social video",
        "Effects",
        "Fast iteration"
      ],
      "limitations": "Less of a broad model marketplace than a focused video product."
    },
    {
      "id": "adobe-firefly",
      "name": "Adobe Firefly",
      "url": "https://firefly.adobe.com",
      "category": "Creative Suite",
      "pricing": "Credit-based Firefly and Creative Cloud plans",
      "modelsAvailable": [
        "Firefly Image",
        "Firefly Video",
        "Generative Fill",
        "Generative Extend",
        "GPT Image",
        "Gemini / Nano Banana",
        "FLUX",
        "Kling AI",
        "Runway",
        "ElevenLabs",
        "Luma AI",
        "Topaz"
      ],
      "apiAccess": "Partial",
      "geo": "Broad, feature-dependent",
      "description": "Adobe-native generative media platform integrated with Creative Cloud apps, Firefly models, and partner models from Google, OpenAI, Kling AI, Runway, Black Forest Labs, Luma AI, ElevenLabs, and Topaz.",
      "strengths": [
        "Adobe workflow",
        "Commercial positioning",
        "Partner models",
        "Editing"
      ],
      "limitations": "Exact partner-model SKUs and credit rates vary by feature, plan, and region."
    }
  ],
  "pricingEvents": [
    {
      "product": "Runway Pro",
      "type": "Subscription",
      "current": "$28/user/month billed annually; 2,250 monthly credits",
      "mechanic": "Credit-based; seconds/images vary by model",
      "change": "Runway plan table includes Gen-4.5, Gen-4, Veo, Kling, Seedance, Flux access.",
      "source": "Runway"
    },
    {
      "product": "Pika Pro",
      "type": "Subscription",
      "current": "$28/month billed yearly; 2,300 video credits",
      "mechanic": "Credit-based per clip, quality, duration, and feature",
      "change": "Pika 2.5 and feature-specific credit rates listed in pricing table.",
      "source": "Pika"
    },
    {
      "product": "Adobe Firefly",
      "type": "Credits",
      "current": "Firefly Pro 4,000 credits; add-ons from 2,000 to 50,000 credits",
      "mechanic": "Credits; standard vs premium features",
      "change": "Adobe FAQ updated June 1, 2026 with video/image credit rates.",
      "source": "Adobe"
    }
  ],
  "updates": [
    {
      "id": "u1",
      "title": "Adobe updates generative credits FAQ",
      "date": "2026-06-01",
      "type": "Pricing",
      "source": "Adobe",
      "summary": "Adobe documents premium credit rates for Firefly video, image, audio, and partner-model usage."
    },
    {
      "id": "u2",
      "title": "Kling 3.0 launches",
      "date": "2026-02-05",
      "type": "Model",
      "source": "Kuaishou / partner listings",
      "summary": "Kling 3.0 expands the video model family with high-resolution, multimodal, and multi-shot workflows."
    },
    {
      "id": "u3",
      "title": "FLUX.2 released",
      "date": "2025-11-25",
      "type": "Model",
      "source": "Black Forest Labs",
      "summary": "Black Forest Labs releases FLUX.2 model series for frontier image generation."
    },
    {
      "id": "u4",
      "title": "Veo 3.1 appears across creative platforms",
      "date": "2025-10-15",
      "type": "Availability",
      "source": "Google / platform listings",
      "summary": "Google's video model is available through Google products and listed by creative suites such as Runway, Luma, and Magnific."
    }
  ],
  "matrixPlatforms": [
    "Runway",
    "Higgsfield",
    "Artlist",
    "ElevenLabs",
    "Weavy",
    "Midjourney",
    "Topview",
    "Krea",
    "Pika",
    "Adobe"
  ],
  "availability": {
    "Veo 3.1": {
      "Runway": "Yes",
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "ElevenLabs": "Yes",
      "Weavy": "Yes",
      "Krea": "Yes"
    },
    "Sora 2": {
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "ElevenLabs": "Yes",
      "Weavy": "Yes",
      "Krea": "Yes"
    },
    "GPT Image 2": {
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "Weavy": "Yes",
      "Topview": "Yes",
      "Krea": "Yes",
      "Adobe": "Partial"
    },
    "Nano Banana Pro": {
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "Krea": "Yes",
      "Adobe": "Partial"
    },
    "Runway Gen-4.5": {
      "Runway": "Yes",
      "Weavy": "Yes",
      "Adobe": "Partial"
    },
    "Kling 3.0": {
      "Runway": "Yes",
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "ElevenLabs": "Yes",
      "Weavy": "Yes",
      "Topview": "Yes",
      "Krea": "Yes",
      "Adobe": "Partial"
    },
    "Seedance 2.0": {
      "Runway": "Yes",
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "ElevenLabs": "Partial",
      "Weavy": "Yes",
      "Topview": "Yes",
      "Krea": "Yes"
    },
    "Wan 2.7": {
      "Higgsfield": "Yes",
      "Artlist": "Yes",
      "Weavy": "Yes"
    },
    "FLUX.2": {
      "Runway": "Yes",
      "Higgsfield": "Yes",
      "Weavy": "Yes",
      "Krea": "Yes",
      "Adobe": "Partial"
    },
    "Lyria 3": {
      "Artlist": "Yes"
    },
    "Eleven v3": {
      "Artlist": "Yes",
      "ElevenLabs": "Yes",
      "Adobe": "Partial"
    },
    "Midjourney": {
      "Midjourney": "Own"
    },
    "Firefly Image 5": {
      "Adobe": "Yes"
    },
    "Topview Video": {
      "Topview": "Yes"
    },
    "Pika 2.5": {
      "Pika": "Yes"
    }
  }
};
