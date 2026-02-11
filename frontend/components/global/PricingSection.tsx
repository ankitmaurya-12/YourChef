import { PricingTable } from '@clerk/nextjs'

const PricingSection = () => {
  return (
    <div className='w-full mx-auto py-8 px-2 md:px-8'>
      {/* Header */}
      <div className='mb-10 text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-stone-900 to-stone-600 bg-clip-text text-transparent'>
          Simple Pricing, No Surprises
        </h2>
        <p className='text-lg text-stone-600 font-light max-w-2xl mx-auto'>
          Start for free. Upgrade anytime to unlock premium features and elevate your cooking experience.
        </p>
      </div>

      {/* Pricing Table Container - Flex centered to fix "weird" alignment */}
      <div className='flex justify-center w-full'>
        <div className="w-full max-w-[1000px]"> 
          <PricingTable
            checkoutProps={{
              appearance: {
                variables: {
                  colorPrimary: '#f97316',
                  borderRadius: '12px',
                },
                elements: {
                  card: {
                    boxShadow: 'none',
                    border: '1px solid #e7e5e4',
                  },
                  // This fixes the drawer overlapping issues
                  drawerRoot: {
                    zIndex: 9999,
                  },
                },
              },
            }}
          />
        </div>
      </div>
      
      <p className='text-center text-xs text-stone-400 mt-6'>
         Secure payments powered by Stripe
      </p>
    </div>
  )
}

export default PricingSection