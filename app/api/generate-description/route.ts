```typescript
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        // Initialize OpenAI client inside handler to avoid build-time errors
        const { OpenAI } = await import('openai');
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
            const prompt = `
        Write a high - converting, professional sales description for a caravan with these details:
    - Condition: ${ condition }
- Year: ${ year }
- Make: ${ make }
- Model: ${ model || 'Standard' }
- Category: ${ category || 'Caravan' }
- Length: ${ length ? length + 'ft' : 'Standard' }
- Sleeps: ${ sleeps }

Tone: Enthusiastic, trustworthy, and premium.
    Structure:
1. A catchy headline.
        2. A paragraph highlighting the lifestyle / adventure potential.
        3. A bulleted list of why this specific model is great.
        4. A call to action.
        
        Keep it under 200 words.Do not include placeholders like "[Insert Phone Number]".
        `;

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini", // Cost efficient and fast
                messages: [
                    { role: "system", content: "You are an expert caravan sales copywriter." },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
            });

            const description = completion.choices[0].message.content;

            return NextResponse.json({ description });

        } catch (error: any) {
            console.error("AI Generation Error:", error);
            return NextResponse.json({ error: error.message || 'Failed to generate description' }, { status: 500 });
        }
    }
