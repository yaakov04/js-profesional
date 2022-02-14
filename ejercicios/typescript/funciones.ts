const app = () => {
    function print(message): void {
        console.log(message);
        }
        
        function add(a: number, b: number): number {
            return a + b;
        }
        
        function concat(a: number, b: number): string {
            return `${a} es un numero y ${b} también es un numero`
        }
        
        print(concat(50,32));
        
        print(add(1,1));
        
        function addF(a: number): (number)=>number{
            return function(b: number){
                return a + b;
            }
        }
        
        const sum: (number)=>number = addF(4);
        
        print(sum(6));
        
        // Parametro opcional
        function name(firstName: string, lastname?: string) :string{
            return `${firstName} ${lastname ? lastname:''}`;
        }

        const diego = name('Diego');

        print(diego);
}

app();
