package examen2024;

public abstract class Individu {
	
	protected String nom;
	protected String prenom;
	protected int identifiant;
	
	public Individu (String nom, String prenom, int identifiant) {
	
		this.nom = nom;
		this.prenom = prenom;
		this.identifiant = identifiant;
	}
		
}
