import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits : Produit[];

  constructor(private produitService : ProduitService,
             private router :Router) { 

   //this.produits = produitService.listeProduit();
    
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
    
  }

 
supprimerProduit(p: Produit)
{
  console.log("suppppppppppppppppppppppppppppp supprimé");
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
  console.log("produit supprimé");
  this.SuprimerProduitDuTableau(p);
});
}

SuprimerProduitDuTableau(prod : Produit) {
  this.produits.forEach((cur, index) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produits.splice(index, 1);
  }
  });
  }

}
