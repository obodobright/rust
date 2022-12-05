use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guessing game");
    let secret_number = rand::thread_rng().gen_range(1..=100);

    // print!("secret number =>  {secret_number}");
    let mut user_name = String::new();
    io::stdin()
        .read_line(&mut user_name)
        .expect("unable to get the username");

    println!("Welcome {user_name}");

    loop {
        println!("Can you guess the number?");

        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("an error occured");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("{user_name}  guessed {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Greater => print!("Number guessed is greater"),
            Ordering::Less => print!("Number guess is lesser"),
            Ordering::Equal => {
                print!("You guess correctly");
                break;
            }
        }
        print!("number is {secret_number}");
    }
}
