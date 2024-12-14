
        document.addEventListener('DOMContentLoaded', function() {
            const pricingOptions = document.querySelectorAll('.pricing-option');
            const totalElement = document.querySelector('.total');
            const prices = {
                '1': 10.00,
                '2': 18.00,
                '3': 24.00
            };

            pricingOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    radio.checked = true;

                    const units = radio.value;
                    const price = prices[units];
                    totalElement.textContent = `Total : $${price.toFixed(2)} USD`;

                    pricingOptions.forEach(opt => opt.classList.remove('most-popular'));
                    
                    if (units === '2') {
                        this.classList.add('most-popular');
                    }
                });
            });

            const addToCartButton = document.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', function() {
                const selectedOption = document.querySelector('input[name="units"]:checked');
                const units = selectedOption.value;
                const price = prices[units];
                
                let sizes = [];
                if (units === '2') {
                    const sizeSelects = document.querySelectorAll('.size-selectors select');
                    sizeSelects.forEach(select => sizes.push(select.value));
                }

                alert(`Added ${units} unit(s) to cart!\nTotal: $${price.toFixed(2)} USD${sizes.length ? '\nSizes: ' + sizes.join(', ') : ''}`);
            });
        });